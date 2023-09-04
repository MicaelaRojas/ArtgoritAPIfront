import React from 'react';

function ImageGallery({ data }) {
  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
      {data.map((item) => (
        <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={`data:image/png;base64,${item.imagen}`} // Asegúrate de especificar el tipo de imagen correcto
              alt={item.titulo}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Titulo: {item.titulo}</h2>
            <p>Autor: {item.descripcion}</p>
            <span>Codigo: {item.codigo}</span>
            <div className="card-actions justify-end">
              {/* info */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
