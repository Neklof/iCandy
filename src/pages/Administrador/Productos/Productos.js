import "../Usuarios/styles.css";
import Button from "components/Button";
import getProductosInventario from "services/getProductosInventario";
import { useEffect, useState } from "react";
import RegistrarProducto from "./RegistrarProducto";
import ModificarProducto from "./ModificarProducto";
import DetallesProducto from "./DetallesProducto";
import Table from "components/Table";
import AdminBuscador from "components/AdminBuscador";
import React, { Component } from "react";
import PubSub from "pubsub-js";

const CAMPOS = [
	"ID",
	"Producto",
	"Cantidad",
	"Precio",
	"Modificar",
	"Eliminar",
	"Detalles",
];

const eliminar = (e) => alert(e.target.className);
const detalles = (e) => alert(e.target.className);

// const find = {};
//const funciones = [handleUpdate, eliminar,detalles];

const Productos = () => {
	const [modalProducto, setModalProducto] = useState(false);
	const [productos, setProductos] = useState([]);
	const [search, setSearch] = useState("");
	const [addProducto, setAddProducto] = useState(false);

	const [idProducto, setIdProducto] = useState(0);
	const [poderosoJson, setPoderosoJson] = useState({});

	//pal filtro
	//const [find, setFind] = useState({});

	const [productos1, setProductos1] = useState([]); //HAREMOS UN SPREAD YEL VALOR ACTUAL PARA LLENAR EL ARREGLO  DE JSON

	const handleUpdate = (e) => {
		const id = e.target.className;
		setIdProducto(id);
		setModalProducto(!modalProducto);

		setPoderosoJson(poderosoJson);
		console.log(handleBuscador(e));
		//  console.log("id -> " + id);
		//  console.log("idPROD -> " + idProducto);
	};

	const handleBuscador = (e) => {
		find = productos.find((producto) => producto.id_PR === e.target.className);

		//FileSystemFileHandle(find);
		if (find) {
			console.log("nombre: " + find.nombre_PR);
			console.log("precio inversion: " + find.inversion);
			console.log("cantidad: " + find.cantidad_PR);
			console.log("precio publico: " + find.precio_PR);
			// console.log("descripcion: "+ find.descripcion_PR)
		}
	};

	const handleAdd = () => {
		setModalProducto(!modalProducto);
	};

	useEffect(() => {
		getProductosInventario().then((response) => setProductos(response));
	}, []);

	//console.log(productos.map((producto) => producto));
	const unJsonGeneral = JSON.stringify(productos);
	//console.log(unJson);
	//console.log("constate: " +id);
	console.log("state: " + idProducto);

	const nuevas_propiedades = productos.map((producto) => ({
		id_PR: producto.id_PR,
		nombre_PR: producto.nombre_PR,
		cantidad_PR: producto.cantidad_PR,
		precio_PR: producto.precio_PR,
	}));

	console.log(nuevas_propiedades);

	return (
		<>
			<AdminBuscador keyword={setSearch} />
			<Table
				campos={CAMPOS}
				// datos = { Object.values(productos) }  -> pendiente por destructurar el objeto para solo enviar 3 datos: id, nombre, cantidad, precio
				datos={Object.values(nuevas_propiedades)}
				filtro="nombre_PR"
				search={search}
				tipo={2}
				funciones={[handleUpdate, eliminar, detalles]} //modificar, eliminar, detalles
			/>

			<div className="contenedor-button">
				<Button onClick={handleAdd}>Agregar producto</Button>
			</div>

			<RegistrarProducto
				modalProducto={modalProducto}
				setModalProducto={setModalProducto}
				addProducto={addProducto}
				setAddProducto={setAddProducto}
				idProducto={idProducto}
				poderosoJson={find}
			/>

			{/* <ModificarProducto
        modalModificarProd = { modalModificarProd }
        setModalModificarProd = { setModalModificarProd }
        modProducto = { modProducto }
        setModProducto = { setModProducto }
      />  */}
		</>
	);
};

export default Productos;
