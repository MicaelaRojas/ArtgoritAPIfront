import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [autor, setAutor] = useState('');
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAutorChange = (e) => {
    setAutor(e.target.value);
  };

  const handleCodigoChange = (e) => {
    setCodigo(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Selecciona un archivo antes de enviar.');
      return;
    }

    const formData = new FormData();
    formData.append('imagen', file);
    formData.append('autor', autor);
    formData.append('codigo', codigo);
    formData.append('descripcion', descripcion);

    try {
      const response = await axios.post('https://localhost:7249/api/obras/registrarObra', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('Imagen subida exitosamente.');

        setFile(null);
        setAutor('');
        setCodigo('');
        setDescripcion('');
      } else {
        alert('Hubo un problema al subir la imagen.');
      }
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      alert('Hubo un problema al subir la imagen.');
    }
  };

  return (
    <div className="text-center mt-10">
      <form className="flex items-center flex-col gap-8" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          className="file-input file-input-bordered file-input-accent w-full max-w-xs"
          onChange={handleFileChange}
        />
        <input
          type="text"
          placeholder="Autor"
          className="input input-bordered input-primary w-full max-w-xs"
          value={autor}
          onChange={handleAutorChange}
        />
        
        <input
         type="text"
          placeholder="Descripción"
          className="input input-bordered input-primary w-full max-w-xs"
          value={descripcion}
          onChange={handleDescripcionChange}
        />
        <textarea
         placeholder="Código"
         className="textarea textarea-bordered textarea-primary w-full max-w-xs"
         value={codigo}
         onChange={handleCodigoChange}
       />
        <button type="submit" className="btn btn-primary">
          Subir Imagen
        </button>
      </form>
    </div>
  );
}

export default UploadForm;
