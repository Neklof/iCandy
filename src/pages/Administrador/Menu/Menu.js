import "./styles.css";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
	const { pathname } = useLocation();

	return (
		<>
			<div className="nav-admin-perfil"></div>
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
					to="/historial"
					className={`nav-admin-links-item ${
						pathname === "/historial" && "nav-admin-links-focus"
					}`}
				>
					Historial de ventas
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
