import "./styles.css";

const Login = () => {
  return (
    <div>
      <div className="fondo-login"></div>
      <div className="div-form-login">
        <h1>Inicio de sesión</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Correo electrónico</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Contraseña</label>
          </div>
          <div className="pass">¿Olvidaste tu contraseña?</div>
          <input className="btn-login" type="submit" value="Login" />
          <div className="signup_link">
            Crear una cuenta <a href="#">aquí</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
