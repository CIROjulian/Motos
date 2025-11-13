import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
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

        <div className="row mt-5">
          {[
            {
              nombre: "DUCATI PANIGALE V4",
              precio: "$25.900.000",
              img: "./public/img/motos-alto.jpg",
            },
            {
              nombre: "YAMAHA R1",
              precio: "$22.500.000",
              img: "./public/img/motos-melas.webp",
            },
            {
              nombre: "BMW S1000RR",
              precio: "$28.300.000",
              img: "./public/img/motos-alto.jpg",
            },
            {
              nombre: "DUCATI PANIGALE V4",
              precio: "$25.900.000",
              img: "./public/img/motos-alto.jpg",
            },
            {
              nombre: "YAMAHA R1",
              precio: "$22.500.000",
              img: "./public/img/motos-melas.webp",
            },
            {
              nombre: "BMW S1000RR",
              precio: "$28.300.000",
              img: "./public/img/motos-alto.jpg",
            },
            {
              nombre: "DUCATI PANIGALE V4",
              precio: "$25.900.000",
              img: "./public/img/motos-alto.jpg",
            },
            {
              nombre: "YAMAHA R1",
              precio: "$22.500.000",
              img: "./public/img/motos-melas.webp",
            },
            {
              nombre: "BMW S1000RR",
              precio: "$28.300.000",
              img: "./public/img/motos-alto.jpg",
            },
          ].map((moto, index) => (
            <div className="col-md-6 col-lg-4 my-4" key={index}>
              <div className="card moto-card">
                <img
                  src={moto.img}
                  alt={moto.nombre}
                  className="moto-img"
                />
                <div className="card-body">
                  <h3 className="text-white fw-bold text-uppercase mb-2">
                    {moto.nombre}
                  </h3>
                  <p className="text-light">
                    Rendimiento, diseño y velocidad. La combinación perfecta
                    para los amantes de la adrenalina.
                  </p>
                  <p className="fw-bold text-warning fs-5">{moto.precio}</p>
                  <button className="btn btn-warning w-100 fw-bold">
                    AGREGAR AL CARRITO
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
