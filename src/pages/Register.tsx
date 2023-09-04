import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rol, setRol] = useState('');

  const isFormValid = email && password && name && rol;
  const navigate = useNavigate();
  const handleClick = () =>{
    Swal.fire('Bienvenido', 'Registro exitoso', 'success').then(() => {
      navigate('/');
    });

  }
  const handleSubmit = async (e) => {
    
    
    e.preventDefault();

    const formData = {
      email,
      password,
      name,
      rol,
    };

    try {
      const response = await axios.post('https://localhost:7249/api/users/registrarUser', formData);
      console.log('Respuesta de la API:', response.data);
      onRegister(response.data);
      setEmail('');
      setPassword('');
      setName('');
      setRol('');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Artgorit!</h1>
            <p className="py-6">Ingresa para subir tus imágenes</p>
          </div>
          <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rol</span>
                </label>
                <input
                  type="text"
                  placeholder="Rol"
                  className="input input-bordered"
                  value={rol}
                  onChange={(e) => setRol(e.target.value)}
                />
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit" disabled={!isFormValid} onClick={handleClick}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
