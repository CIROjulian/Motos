import React from "react";

export default function Motos({ motos = [], onAdd = () => {} }) {
  return (
    <>
      <div className="row mt-5">
        {motos.map((moto, index) => (
          <div className="col-md-6 col-lg-4 my-4" key={moto.id ?? index}>
            <div className="card moto-card">
              <img src={moto.image || moto.img} alt={moto.name || moto.nombre} className="moto-img" />
              <div className="card-body">
                <h3 className="text-white fw-bold text-uppercase mb-2">{moto.name || moto.nombre}</h3>
                <p className="text-light">{moto.description || "Rendimiento, diseño y velocidad."}</p>
                <p className="fw-bold text-warning fs-5">{moto.price ? `$${moto.price}` : moto.precio}</p>
                <button className="btn btn-warning w-100 fw-bold" onClick={() => onAdd(moto)}>
                  AGREGAR AL CARRITO
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}