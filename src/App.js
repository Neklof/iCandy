import "App.css";
import Administrador from "pages/Administrador";
import Cliente from "pages/Cliente";
import Login from "pages/Cliente/Login/Login";
import Registrarme from "pages/Cliente/Login/Registrarme";
import Recuperar from "pages/Cliente/RecuperarContra/Recuperar";
import Confirmar from "pages/Cliente/RecuperarContra/Confirmar";

function App() {
  const admin = false;

  return (
    <div className={`${admin ? "App_Admin" : "App_Cliente"}`}>
      {admin ? <Administrador /> : <Confirmar />}
    </div>
  );
}

export default App;
