import { useState } from "react";
import AdminBuscador from "components/AdminBuscador";
import Table from "components/Table";
import Button from "components/Button";
import DetallesCompra from "components/DetallesCompra";

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
			<DetallesCompra
				modalDetalles={modalDetalles}
				setModalDetalles={setModalDetalles}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "end",
					alignItems: "center",
					height: "15%",
					paddingRight: "25px",
				}}
			>
				<Button onClick={() => setModalDetalles(!modalDetalles)}>
					Auxiliar
				</Button>
			</div>
		</>
	);
};

export default Pedidos;
