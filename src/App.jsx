import { useState } from "react";
import "./App.css";
import { db } from "./assets/db";
import Header from "./componets/Header";
import Motos from "./componets/Motos";


function App() {


  const [data] = useState(db);
  const [cart, setCart] = useState([]);

  // Add a product to the cart. If already present, increase quantity.
  function addToCart(product){
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if(existing){
        return prev.map(p => p.id === product.id ? {...p, quantity: p.quantity + 1} : p);
      }
      return [...prev, {...product, quantity: 1}];
    });
  }

  // Remove a product entirely from the cart by id
  function removeFromCart(productId){
    setCart(prev => prev.filter(p => p.id !== productId));
  }

  // Clear the whole cart
  function clearCart(){
    setCart([]);
  }

  // Increase quantity by 1
  function incrementQuantity(productId){
    setCart(prev => prev.map(p => p.id === productId ? {...p, quantity: (p.quantity || 0) + 1} : p));
  }

  // Decrease quantity by 1; remove the item if quantity reaches 0
  function decrementQuantity(productId){
    setCart(prev => {
      return prev
        .map(p => p.id === productId ? {...p, quantity: (p.quantity || 0) - 1} : p)
        .filter(p => (p.quantity || 0) > 0);
    });
  }


  
  
  return (
    <>
      {/* Header */}
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        increment={incrementQuantity}
        decrement={decrementQuantity}
      />
      

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <img
          src="./public/img/motos-alto.jpg"
          alt="Moto principal"
          className="hero-img"
        />
        <h2 className="hero-text">VIVE LA POTENCIA</h2>
      </section>

      {/* Colección */}
      <main id="coleccion" className="container mt-5">
        <h2 className="text-center section-title">NUESTRA COLECCIÓN</h2>


  <Motos motos={data} onAdd={addToCart} />
        
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="text-center text-light m-0 py-4">
          Motos Xtreme - Todos los derechos reservados © 2025
        </p>
      </footer>
    </>
  );
}

export default App;
