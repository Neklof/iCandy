import { useState, useEffect } from "react";
import AdminBuscador from "components/AdminBuscador";
import Table from "components/Table";
import DetallesCompra from "components/DetallesCompra";
import getPedidos from "services/getPedidos";
import getDetallesPedido from "services/getDetallesPedido";
import { useForm } from "react-hook-form";
import updatePedido from "services/updatePedido";
import "./styles.css";

const CAMPOS = [
	"Pedido",
	"Cliente",
	"Estado",
	"Fecha",
	"Fecha de entrega",
	"Detalles",
];

const Pedidos = () => {
	const [search, setSearch] = useState("");
	const [modalDetalles, setModalDetalles] = useState(false);
	const [pedidos, setPedidos] = useState([]);
	const [pedidoDetalle, setPedidoDetalle] = useState({});
	const [pedidoProductos, setPedidoProductos] = useState({});
	const [pedidoActual, setPedidoActual] = useState();
	const [pedidoActualizado, setPedidoActualizado] = useState(false);

	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			status: "",
			fechaEntrega: "",
		},
	});

	const handleEditarPedido = (info) => {
		info.id_VP = pedidoActual;
		updatePedido(info).then((response) => {
			alert(response);
			setModalDetalles(!modalDetalles);
			setPedidoActualizado(!pedidoActualizado);
		});
	};

	useEffect(() => {
		!modalDetalles &&
			getPedidos().then((response) => {
				setPedidos(response);
			});
	}, [reset, pedidoActualizado]);

	const handleDetalles = (e) => {
		const pedidoID = e.target.name;
		console.log(pedidoID);
		setPedidoActual(pedidoID);

		getDetallesPedido(pedidoID).then((response) => {
			setPedidoDetalle(response.detallesPedido);
			setPedidoProductos(response.detallesProductos);
			reset({
				status: response.detallesPedido[0].estado_VP,
				fechaEntrega: response.detallesPedido[0].fechaDeEntrega_VP,
			});
			setModalDetalles(!modalDetalles);
		});
	};

	return (
		<>
			<AdminBuscador keyword={setSearch} />
			<Table
				campos={CAMPOS}
				datos={pedidos}
				filtro="id_VP"
				search={search}
				tipo={3}
				funciones={handleDetalles}
			></Table>
			{Object.keys(pedidoDetalle).length !== 0 &&
				Object.keys(pedidoProductos).length !== 0 && (
					<DetallesCompra
						modalDetalles={modalDetalles}
						setModalDetalles={setModalDetalles}
						pedidoDetalle={pedidoDetalle}
						pedidoProductos={pedidoProductos}
						handleEditarPedido={handleEditarPedido}
						register={register}
						handleSubmit={handleSubmit}
					/>
				)}
		</>
	);
};

export default Pedidos;
