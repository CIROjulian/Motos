import { useState } from "react";
import "./App.css";
import { db } from "./assets/db";
import Header from "./componets/Header";
import Motos from "./componets/motos";


function App() {


  const [data,setData] = useState(db);


  
  
  return (
    <>
      {/* Header */}
      <Header/>
      

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


        {data.map((motos) =>(
        <Motos motos = {motos}
        />
        ))}
        
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
