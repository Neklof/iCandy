import AdminContainer from "components/AdminContainer";
import NavAdminContainer from "components/NavAdminContainer";
import MainContainer from "components/MainContainer";
import Usuarios from "pages/Administrador/Usuarios/Usuarios";
import Caja from "pages/Administrador/Caja/Caja";
import { Routes, Route } from "react-router-dom";
import Menu from "pages/Administrador/Menu/Menu";
import Pedidos from "./Administrador/Pedidos/Pedidos";
import Productos from "./Administrador/Productos/Productos";

const Administrador = () => {
	return (
		<MainContainer>
			<NavAdminContainer>
				<Menu></Menu>
			</NavAdminContainer>
			<Routes>
				<Route path="/" element={<div />} />
				<Route
					path="/productos"
					element={
						<AdminContainer>
							<Productos />
						</AdminContainer>
					}
				/>
				<Route path="/surtir_productos" element={<div />} />
				<Route
					path="/usuarios"
					element={
						<AdminContainer>
							<Usuarios />
						</AdminContainer>
					}
				/>
				<Route path="/caja" element={<Caja />} />
				<Route path="/historial" element={<div />} />
				<Route
					path="/pedidos"
					element={
						<AdminContainer>
							<Pedidos />
						</AdminContainer>
					}
				/>
				<Route path="/configuracion" element={<div />} />

				<Route path="*" element={<div />}></Route>
			</Routes>
		</MainContainer>
	);
};

export default Administrador;
