import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Header({ cart = [], removeFromCart = () => {}, clearCart = () => {}, increment = () => {}, decrement = () => {} }) {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);
    const [portalEl] = useState(() => typeof document !== 'undefined' ? document.createElement('div') : null);
    const [pos, setPos] = useState({ top: 0, left: 0, width: 360 });

    const totalCount = cart.reduce((s, p) => s + (p.quantity || 0), 0);

    function parsePriceValue(price){
        // price may be number or string like "$25.900.000" -> convert to number
        if(typeof price === 'number') return price;
        if(!price) return 0;
        const digits = String(price).replace(/[^0-9]/g, '');
        return digits ? parseInt(digits, 10) : 0;
    }

    function formatMoney(value){
        if(typeof value !== 'number') value = Number(value) || 0;
        return `$${value.toLocaleString()}`;
    }

    function formatTotal(cartItems){
        const total = cartItems.reduce((s, item) => {
            const price = item.price != null ? item.price : parsePriceValue(item.precio);
            return s + price * (item.quantity || 0);
        }, 0);
        return formatMoney(total);
    }
    useEffect(() => {
        if (!portalEl) return;
        portalEl.className = 'cart-portal-root';
        document.body.appendChild(portalEl);
        return () => {
            if (portalEl && portalEl.parentNode) portalEl.parentNode.removeChild(portalEl);
        };
    }, [portalEl]);

    useEffect(() => {
        function updatePos(){
            const btn = buttonRef.current;
            if (!btn) return;
            const rect = btn.getBoundingClientRect();
            const panelWidth = pos.width || 360;
            const left = Math.min(Math.max(rect.right - panelWidth, 8), window.innerWidth - panelWidth - 8) + window.scrollX;
            const top = rect.bottom + 8 + window.scrollY;
            setPos(p => ({ ...p, left, top }));
        }

        if (open) updatePos();
        const onScroll = () => { if (open) updatePos(); };
        window.addEventListener('scroll', onScroll, true);
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll, true);
            window.removeEventListener('resize', onScroll);
        };
    }, [open, portalEl, pos.width]);

    // cart panel JSX (rendered into portal)
    const panel = (
        <div
            className="cart-panel card p-3"
            style={{ position: 'absolute', left: pos.left, top: pos.top, width: pos.width, zIndex: 9999 }}
            role="dialog"
            aria-label="Carrito de compras"
        >
            <h6 className="mb-2">Tu carrito</h6>
            {cart.length === 0 ? (
                <p className="text-muted">El carrito está vacío.</p>
            ) : (
                <>
                    <ul className="list-unstyled small">
                        {cart.map(item => (
                            <li key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center">
                                    <img src={item.image || item.img || './public/img/moto-placeholder.jpg'} alt={item.name || item.nombre} className="cart-thumb me-2" />
                                    <div>
                                        <div className="fw-bold small">{item.name || item.nombre}</div>
                                        <div className="text-muted" style={{ fontSize: '0.8rem' }}>{item.quantity} x {item.price ? `$${item.price}` : item.precio}</div>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="text-warning fw-bold">{(item.price ? `$${(item.price * (item.quantity||0)).toLocaleString()}` : item.precio)}</div>
                                    <div>
                                        <div className="d-flex align-items-center justify-content-end mt-2">
                                            <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decrement(item.id)} aria-label="Decrementar">-</button>
                                            <span className="mx-1">{item.quantity}</span>
                                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => increment(item.id)} aria-label="Incrementar">+</button>
                                        </div>
                                        <button className="btn btn-sm btn-outline-danger mt-1" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div>
                            <button className="btn btn-sm btn-secondary" onClick={() => setOpen(false)}>Cerrar</button>
                            <button className="btn btn-sm btn-link text-danger ms-2" onClick={() => { clearCart(); setOpen(false); }}>Vaciar carrito</button>
                        </div>
                        <div className="text-end">
                            <div className="small text-muted">Total</div>
                            <div className="fw-bold text-warning">{formatTotal(cart)}</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );

    return (
        <>
            <header className="header">
                <div className="container d-flex justify-content-between align-items-center py-3">
                    <h1 className="logo">MOTOS XTREME</h1>
                    <nav className="nav-menu d-flex align-items-center">
                        <a href="#inicio" className="nav-link">Inicio</a>
                        <a href="#coleccion" className="nav-link">Colección</a>
                        <a href="#contacto" className="nav-link">Contacto</a>
                        <div className="cart-container ms-3">
                            <button ref={buttonRef} className="btn btn-link p-0" onClick={() => setOpen(v => !v)} aria-label="Abrir carrito">
                                <img src="./public/img/carrito.png" alt="Carrito" className="cart-icon" />
                                {totalCount > 0 && <span className="badge bg-warning text-dark ms-1">{totalCount}</span>}
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
            {portalEl && open ? createPortal(panel, portalEl) : null}
        </>
    );
}