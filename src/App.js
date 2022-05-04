import "App.css";
import Administrador from "pages/Administrador";
import Cliente from "pages/Cliente";
import endpoints from "endpoints";
import Login from "pages/Cliente/Login/Login";
import Registrarme from "pages/Cliente/Login/Registrarme";
import Recuperar from "pages/Cliente/RecuperarContra/Recuperar";
import Confirmar from "pages/Cliente/RecuperarContra/Confirmar";
// const env = process.env.NODE_ENV;
// console.log(endpoints.addCarrito);
function App() {
  const admin = false;
  return (
    <div className={`${admin ? "App_Admin" : "App_Cliente"}`}>
      {admin ? <Administrador /> : <Cliente />}
    </div>
  );
}

export default App;
