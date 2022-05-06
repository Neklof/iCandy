import "./styles.css";
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import axios from "axios";
// import ScriptTag from "react-script-tag";

const Recuperar = () => {
  //   <ScriptTag src="https://www.google.com/recaptcha/api.js" async defer />;
  const [correo, setCorreo] = useState("");

  async function request_Password(e) {
    e.preventDefault();
    let fd_login = new FormData();

    fd_login.append("correo", correo);

    // Funciona (en este no se usa el addUserRegistrar.js)
    const res = await axios.post(
      "http://localhost/icandy/API/recuperar_contrasena_cliente.php",
      fd_login
    );

    alert("Respuesta: " + res.data);

    if (res.data == "Uno") {
      //alert("Respuesta: " + res.data);
      alert("Se envio un crreo");
    } else {
      alert(res.data);
      //alert("Respuesta: " + res.data);
    }
  }

  return (
    <div className="div-contenedor-recuperar">
      <div className="div-fondo-recuperar"></div>
      <div className="div-form-recuperar">
        <h1>Recuperar contraseña</h1>
        <form method="post">
          <div className="txt_info">
            <input
              type="text"
              required
              onChange={(e) => setCorreo(e.target.value)}
            />
            <span></span>
            <label>Correo electrónico:</label>
          </div>
          <div className="captcha-container">
            <div
              className="g-recaptcha"
              data-sitekey="6LdSnkcfAAAAABp3MDj27-hm5K0uMGYWD1GRk7Ow"
            >
              <Helmet>
                <script
                  src="https://www.google.com/recaptcha/api.js"
                  async
                  defer
                />
              </Helmet>
            </div>
          </div>
          <button
            className="btn-recuperar"
            type="submit"
            onClick={(e) => request_Password(e)}
          >
            Continuar
          </button>
          <h3 className="espacio">Recuperar contraseña</h3>
        </form>
      </div>
    </div>
  );
};

export default Recuperar;
