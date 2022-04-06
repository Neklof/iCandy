import "./styles.css";
import { Helmet } from "react-helmet";
// import ScriptTag from "react-script-tag";

const Recuperar = () => {
  //   <ScriptTag src="https://www.google.com/recaptcha/api.js" async defer />;
  return (
    <div className="div-contenedor-recuperar">
      <div className="div-fondo-recuperar"></div>
      <div className="div-form-recuperar">
        <h1>Recuperar contraseña</h1>
        <form method="post">
          <div className="txt_info">
            <input type="text" required />
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
          <input className="btn-recuperar" type="submit" value="Continuar" />
        </form>
      </div>
    </div>
  );
};

export default Recuperar;
