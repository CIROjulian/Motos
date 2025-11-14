export default function Motos({motos}){



    return( 
        <>
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

        </>
    )
}