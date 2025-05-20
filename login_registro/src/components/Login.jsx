import React, { useState } from "react";
import "./Auth.css"; 

function Login({ switchToRegister }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [ver, setVer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Login visual\nUsuario: ${usuario}\nContraseña: ${password}`);
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Usuario</label>
          <input
            type="text" // Cambiado de "Usuario" a "text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Contraseña</label>
          <div className="password-input">
            <input
              type={ver ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setVer(!ver)}
            >
              {ver ? 'ocultar' : 'mostrar'}
            </button>
          </div>
        </div>
        <button type="submit" className="auth-button">
          Ingresar
        </button>
      </form>
      <p className="auth-switch">
        ¿No tienes cuenta?{' '}
        <button onClick={switchToRegister} className="switch-button">
          Regístrate
        </button>
      </p>
    </div>
  );
}

export default Login;