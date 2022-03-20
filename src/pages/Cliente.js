import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Nav from "./Cliente/Nav/Nav";
import Inicio from "./Cliente/Inicio/Inicio";
import Footer from "./Cliente/Footer/Footer";

const Cliente = () => {
	return (
		<Componente>
			<Nav />
			<Routes>
				<Route path="/" element={<Inicio />}></Route>
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
