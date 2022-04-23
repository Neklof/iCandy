import styled from "styled-components";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Cliente/Nav/Nav";
import Inicio from "./Cliente/Inicio/Inicio";
import Detalles from "./Cliente/Detalles/Detalles";
import Footer from "./Cliente/Footer/Footer";
import Historial from "./Cliente/Historial/Historial";
import Carrito from "./Cliente/Carrito/Carrito";
import { ToastContainer, toast } from "react-toastify";
import { Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getCarrito from "services/getCarrito";
import Perfil from "./Cliente/Perfil/Perfil";
import Contacto from "./Cliente/Contacto/Contacto";

const Cliente = () => {
	const correcto = (mensaje) => {
		toast.success(mensaje, {
			position: "bottom-left",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Flip,
		});
	};
	const error = (mensaje) => {
		toast.error(mensaje, {
			position: "bottom-left",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Flip,
		});
	};
	const id = { id_C: 2 };
	const [datacarrito, setDatacarrito] = useState([]);
	const [contCarrito, setContCarrito] = useState(0);
	const [idproducto, setIdProducto] = useState(0);
	const handleContadorCarrito = () => {
		correcto("Se agrego al carrito");
		setContCarrito(contCarrito + 1);
	};
	const handleQuitar = (respuesta) => {
		if (respuesta == "anadir") {
			setContCarrito(contCarrito + 1);
		} else if (respuesta == "Agregar") {
			correcto("Se agrego al carrito");
			setContCarrito(contCarrito + 1);
		} else if (respuesta == "Quitar") {
			setContCarrito(contCarrito - 1);
		} else if (respuesta == "Eliminar") {
			setContCarrito(contCarrito - 1);
			error("Se Elimino del carrito");
		}
	};
	useEffect(() => {
		getCarrito(id).then((response) => setDatacarrito(response));
	}, [contCarrito]);
	const tam = datacarrito.length;
	return (
		<Componente>
			<Nav data={datacarrito} tamano={tam} funcion={handleQuitar} />
			<Routes>
				<Route path="/" element={<Inicio funcion={handleContadorCarrito} />}>
					<Route
						path="/:page"
						element={<Inicio funcion={handleContadorCarrito} />}
					></Route>
				</Route>
				<Route
					path="/detalles/:id"
					element={
						<Detalles funcion={handleContadorCarrito} data={datacarrito} />
					}
				></Route>
				<Route path="/contact" element={<Contacto />}></Route>
				<Route path="/historial" element={<Historial />}></Route>
				<Route path="/miPerfil" element={<Perfil />}></Route>
				<Route
					path="/carrito"
					element={
						<Carrito data={datacarrito} tamano={tam} quitar={handleQuitar} />
					}
				></Route>
			</Routes>
			<Footer />
			<ToastContainer />
		</Componente>
	);
};

export default Cliente;

const Componente = styled.div`
	width: 100%;
	height: 100%;
`;
