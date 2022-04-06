import "./StylesConfirmar.css";

const Confirmar = () => {
  return (
    <div className="div-contenedor-confirmar">
      <div className="div-fondo-confirmar"></div>
      <div className="div-form-confirmar">
        <h1>Restablecer contraseña</h1>
        <form method="post">
          <div className="txt_info">
            <input type="password" required />
            <span></span>
            <label>Contraseña nueva:</label>
          </div>
          <div className="txt_info">
            <input type="password" required />
            <span></span>
            <label>Confirmar contraseña:</label>
          </div>
          <div className="container-btn-confirmar">
            <input
              className="btn-confirmar"
              type="submit"
              value="Restablecer contraseña"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Confirmar;
