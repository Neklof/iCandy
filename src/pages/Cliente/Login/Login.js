import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Login = ({ session, setSession }) => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  // const [session, setSession] = useState(0);
  const [user, setUser] = useState(null);

  async function logUser(e) {
    e.preventDefault();
    let fd_login = new FormData();

    fd_login.append("correo", correo);
    fd_login.append("contrasena", contrasena);

    // Funciona (en este no se usa el addUserRegistrar.js)
    const res = await axios.post(
      "http://localhost/icandy/API/login_SSO.php",
      fd_login
    );

    if (res.data != null) {
      setUser(res.data);
      setSession(res.data);

      window.localStorage.setItem("loggedUser", JSON.stringify(res.data));
    }
    // console.log(res.data);
    // console.log(res.data.tipo_C);

    // if (res.data == null) {
    //   alert("no");
    // } else {
    //   alert("si");
    // }

    // if (res.data == "Si se pudo") {
    //   alert("Oh si");
    //   alert("Respuesta: " + res.data);
    //   setSession(1);
    // } else {
    //   alert("nelson");
    //   alert("Respuesta: " + res.data);
    //   setSession(0);
    //   alert(session);
    // }
  }

  return (
    <div>
      <div className="fondo-login"></div>
      <div className="div-form-login">
        <h1>Inicio de sesión</h1>
        {/* method="post" */}
        <form>
          <div className="txt_field">
            <input
              type="text"
              required
              onChange={(e) => setCorreo(e.target.value)}
            />
            <span></span>
            <label>Correo electrónico</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              className="contrasena"
              name="contrasena"
              onChange={(e) => setContrasena(e.target.value)}
            />
            <span></span>
            <label>Contraseña</label>
          </div>
          <div className="pass">¿Olvidaste tu contraseña?</div>
          <button
            className="btn-login"
            type="submit"
            onClick={(e) => logUser(e)}
          >
            Login
          </button>
          <div className="signup_link">
            Crear una cuenta <a href="#">aquí</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
