import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { authenticate } from "../../utils/api";

const Login = ({ onAuthenticate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const backgroundContainerClass =
    theme === "dark" ? "background__container-dark" : "";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authenticate(email, password);
      alert("funciona!");
      onAuthenticate(true);
      navigate("/");
    } catch (error) {
      console.error("Error de autenticación:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="background">
      <img src="/images/logotext.png" alt="logo" className="background__img" />
      <div className={`background__container ${backgroundContainerClass}`}>
        <img
          src="/images/text.png"
          alt=""
          className="background__container__img"
        />
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="form-control"
              onChange={handleEmailChange}
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
