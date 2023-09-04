import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link de React Router

function Navbar() {
  return (
    <div className="navbar bg-base-100 justify-between">
      <Link to="/" className="font-bold normal-case text-xl underline">GalleriaPro</Link>
      <Link to="/register" className="btn btn-ghost">Login</Link>
    </div>
  );
}

export default Navbar;
