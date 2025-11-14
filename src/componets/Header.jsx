export default function Header (){


    return(
        <>
        <header className="header">
            <div className="container d-flex justify-content-between align-items-center py-3">
            <h1 className="logo">MOTOS XTREME</h1>
            <nav className="nav-menu d-flex align-items-center">
                <a href="#inicio" className="nav-link">Inicio</a>
                <a href="#coleccion" className="nav-link">Colección</a>
                <a href="#contacto" className="nav-link">Contacto</a>
                <div className="cart-container ms-3">
                <img
                    src="./public/img/carrito.png"
                    alt="Carrito"
                    className="cart-icon"
                />
                </div>
            </nav>
            </div>
        </header>  

        </>
  
      )
}