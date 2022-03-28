import "./styles.css";

const Login = () => {
  return (
    <div>
      <div className="fondo"></div>
      <div className="center">
        <h1>Inicio de sesión</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Correo electrónico</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Contraseña</label>
          </div>
          <div class="pass">¿Olvidaste tu contraseña?</div>
          <input type="submit" value="Login" />
          <div class="signup_link">
            Crear una cuenta <a href="#">aquí</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
