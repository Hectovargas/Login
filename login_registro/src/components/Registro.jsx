import React, { useState } from "react";
import "./Auth.css"; 

function Registro({ switchToLogin }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [ver, setVer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registro visual\nUsuario: ${usuario}\nCorreo: ${correo}`);
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Correo</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
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
              {ver ? 'ocultar' : 'Mostrar'}
            </button>
          </div>
        </div>
        <div className="input-group">
          <label>Confirmar Contraseña</label>
          <input
            type={ver ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Teléfono</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Registrarse
        </button>
      </form>
      <p className="auth-switch">
        ¿Ya tienes cuenta?{' '}
        <button onClick={switchToLogin} className="switch-button">
          Inicia Sesión
        </button>
      </p>
    </div>
  );
}

export default Registro;