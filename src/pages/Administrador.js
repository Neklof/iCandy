import AdminContainer from "components/AdminContainer";
import NavAdminContainer from "components/NavAdminContainer";
import MainContainer from "components/MainContainer";
import Usuarios from "pages/Administrador/Usuarios/Usuarios";
import { Routes, Route } from "react-router-dom";

const Administrador = () => {
	return (
		<MainContainer>
			<NavAdminContainer></NavAdminContainer>
			<AdminContainer>
				<Routes>
					<Route path="/usuarios" element={<Usuarios />} />
					<Route path="/" element={<Usuarios />} />
				</Routes>
			</AdminContainer>
		</MainContainer>
	);
};

export default Administrador;
