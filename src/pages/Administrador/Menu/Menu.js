import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import getCliente from "services/getCliente";
const Menu = () => {
  const id_usuario = {};
  let user = {};
  const { pathname } = useLocation();
  const userJson = window.localStorage.getItem("loggedUser");
  const [dataUser, setDatauser] = useState([]);

  if (userJson) {
    user = JSON.parse(userJson);
    id_usuario.id_cliente = user.id_C;
  }

  useEffect(() => {
    if (userJson) {
      getCliente(id_usuario).then((response) => {
        if (response) {
          response.map((usuario) => {
            setDatauser(usuario);
          });
        } else {
        }
      });
    } else {
    }
  }, []);
  console.log(dataUser);
  return (
    <>
      <div className="nav-admin-perfil">
        <div className="contendor_foto_admin">
          <div className="rombo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
              alt=""
            />
          </div>
        </div>
        <p>
          {dataUser.nombre_C + " "}
          {dataUser.apellidos_C}
        </p>
      </div>
      <div className="nav-admin-links">
        <Link
          to="/"
          className={`nav-admin-links-item ${
            pathname === "/" && "nav-admin-links-focus"
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/productos"
          className={`nav-admin-links-item ${
            pathname === "/productos" && "nav-admin-links-focus"
          }`}
        >
          Productos
        </Link>
        <Link
          to="/surtir_productos"
          className={`nav-admin-links-item ${
            pathname === "/surtir_productos" && "nav-admin-links-focus"
          }`}
        >
          Surtir productos
        </Link>
        <Link
          to="/usuarios"
          className={`nav-admin-links-item ${
            pathname === "/usuarios" && "nav-admin-links-focus"
          }`}
        >
          Usuarios
        </Link>
        <Link
          to="/caja"
          className={`nav-admin-links-item ${
            pathname === "/caja" && "nav-admin-links-focus"
          }`}
        >
          Caja
        </Link>
        <Link
          to="/pedidos"
          className={`nav-admin-links-item ${
            pathname === "/pedidos" && "nav-admin-links-focus"
          }`}
        >
          Pedidos
        </Link>
        <Link
          to="/configuracion"
          className={`nav-admin-links-item ${
            pathname === "/configuracion" && "nav-admin-links-focus"
          }`}
        >
          Configuración
        </Link>
      </div>
    </>
  );
};

export default Menu;
