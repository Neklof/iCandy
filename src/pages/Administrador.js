import AdminContainer from "components/AdminContainer";
import NavAdminContainer from "components/NavAdminContainer";
import MainContainer from "components/MainContainer";
import Usuarios from "pages/Administrador/Usuarios/Usuarios";
import { Routes, Route } from "react-router-dom";
import Menu from "pages/Administrador/Menu/Menu";
import Pedidos from "./Administrador/Pedidos/Pedidos";

const Administrador = () => {
	return (
		<MainContainer>
			<NavAdminContainer>
				<Menu></Menu>
			</NavAdminContainer>
			<AdminContainer>
				<Routes>
					<Route path="/" element={<div />} />
					<Route path="/productos" element={<div />} />
					<Route path="/surtir_productos" element={<div />} />
					<Route path="/usuarios" element={<Usuarios />} />
					<Route path="/caja" element={<div />} />
					<Route path="/historial" element={<div />} />
					<Route path="/pedidos" element={<Pedidos />} />
					<Route path="/configuracion" element={<div />} />

					<Route path="*" element={<div />}></Route>
				</Routes>
			</AdminContainer>
		</MainContainer>
	);
};

export default Administrador;
