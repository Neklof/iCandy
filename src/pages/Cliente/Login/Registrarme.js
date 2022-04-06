import "./registrarmeStyles.css";

const Registrarme = () => {
  return (
    <div className="div-contenedor-registrarme">
      <div className="div-fondo-registrarme"></div>
      <div className="div-form-registrarme">
        <h1>Crear cuenta</h1>
        <form method="post">
          <div className="txt_dato">
            <input type="text" required />
            <span></span>
            <label>Nombre(s):</label>
          </div>
          <div className="txt_dato">
            <input type="text" required />
            <span></span>
            <label>Apelldio(s):</label>
          </div>
          <div className="txt_dato caca">
            <input type="text" required />
            <span></span>
            <label>Calle:</label>
          </div>
          <div className="txt_dato">
            <input type="text" required />
            <span></span>
            <label>Colonia:</label>
          </div>
          <div className="txt_dato">
            <input type="text" required />
            <span></span>
            <label>CP:</label>
          </div>

          <div className="txt_dato">
            <input type="text" required />
            <span></span>
            <label>Email:</label>
          </div>
          <div className="txt_dato">
            <input type="text" required />
            <span></span>
            <label>Telefono:</label>
          </div>
          <div className="txt_dato">
            <input type="password" required />
            <span></span>
            <label>Contraseña</label>
          </div>
          <div className="txt_dato">
            <input type="password" required />
            <span></span>
            <label>Confirmar contraseña:</label>
          </div>
          <div className="txt_dato cacaImagen">
            <input type="file" />
          </div>
          <input
            className="btn-registrarme"
            type="submit"
            value="Crear cuenta"
          />
          <div className="signup_link">
            Ya tengo cuenta, inicia <a href="#">aquí</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registrarme;
