import { useState } from "react";
import AdminBuscador from "components/AdminBuscador";
import Table from "components/Table";
import Modal from "components/Modal";

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
	const [modalDetalles, setModalDetalles] = useState(0);

	return (
		<>
			<AdminBuscador keyword={setSearch} />
			<Table
				campos={CAMPOS}
				datos={[]}
				filtro="id"
				search={search}
				tipo={3}
			></Table>
			<Modal
				modalUsuario={modalDetalles}
				setModalUsuario={setModalDetalles}
			></Modal>
		</>
	);
};

export default Pedidos;
