import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Nav from "./Cliente/Nav/Nav";
import Inicio from "./Cliente/Inicio/Inicio";
import Detalles from "./Cliente/Detalles/Detalles";
import Footer from "./Cliente/Footer/Footer";
import Historial from "./Cliente/Historial/Historial";

const Cliente = () => {
	return (
		<Componente>
			<Nav />
			<Routes>
				<Route path="/" element={<Inicio />}></Route>
				<Route path="/detalles" element={<Detalles />}></Route>
				<Route path="/historial" element={<Historial />}></Route>
			</Routes>
			<Footer />
		</Componente>
	);
};

export default Cliente;

const Componente = styled.div`
	width: 100%;
	height: 100%;
`;
