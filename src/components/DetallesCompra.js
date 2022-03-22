import styled from "styled-components";
import Modal from "./Modal";
import CampoDetalles from "./CampoDetalles";
import TablaDetalles from "./TablaDetalles";
import editar from "assets/Img/editar.png";
import "pages/Administrador/Pedidos/styles.css";

const DetallesCompra = ({
	modalDetalles,
	setModalDetalles,
	pedidoDetalle,
	pedidoProductos,
	handleEditarPedido,
	register,
	handleSubmit,
}) => {
	const costoEnvio = 10;

	return (
		<Modal
			ventanaModal={modalDetalles}
			setVentanaModal={setModalDetalles}
			encabezado={true}
			titulo="Detalles de la compra"
		>
			<Content>
				<CampoDetalles
					nombre="Nombre: "
					dato={pedidoDetalle[0].nombre}
					width={"33%"}
				/>
				<CampoDetalles
					nombre="Teléfono: "
					dato={pedidoDetalle[0].telefono_C}
					width={"33%"}
				/>
				{/* <CampoDetalles
					nombre="Estatus: "
					dato={pedidoDetalle[0].estado_VP}
					width={"33%"}
				/> */}
				<Form width={"33%"} onSubmit={handleSubmit(handleEditarPedido)}>
					<label>Status: </label>
					<select
						className={`estado_${pedidoDetalle[0].estado_VP}`}
						{...register("status", { required: true })}
						// defaultValue={pedidoDetalle[0].estado_VP || "Pendiente"}
					>
						<option className="estado_Pendiente" value="Pendiente">
							Pendiente
						</option>
						<option className="estado_Activo" value="Activo">
							Activo
						</option>
						<option className="estado_Cancelado" value="Cancelado">
							Cancelado
						</option>
						<option className="estado_Entregado" value="Entregado">
							Entregado
						</option>
					</select>
					<button onSubmit={handleSubmit(handleEditarPedido)}>
						<img src={editar} alt="editar" />
					</button>
				</Form>
				<CampoDetalles
					nombre="Fecha del pedido: "
					dato={pedidoDetalle[0].fecha_VP}
				/>
				{/* <CampoDetalles
					nombre="Fecha de entrega: "
					dato={pedidoDetalle[0].fechaDeEntrega_VP}
				/> */}
				<Form onSubmit={handleSubmit(handleEditarPedido)}>
					<label>Fecha de entrega: </label>
					<input
						{...register("fechaEntrega", { required: true })}
						type="date"
						// defaultValue={pedidoDetalle[0].fechaDeEntrega_VP || new Date()}
					/>
					<button onSubmit={handleSubmit(handleEditarPedido)}>
						<img src={editar} alt="editar" />
					</button>
				</Form>
				<CampoDetalles nombre="Moneda: " dato={"MXN"} width={"100%"} />
				<CampoDetalles
					nombre="Dirección: "
					dato={pedidoDetalle[0].direccion_C}
					width={"100%"}
				/>

				<h3>Productos</h3>
				<TablaDetalles datos={pedidoProductos} />
				<Totales>
					<p>
						Envio: <span>{`$${costoEnvio}.00`}</span>
					</p>
				</Totales>
				<Totales border={true}>
					<p>
						Subtotal: <span>{`$${pedidoDetalle[0].total_VP}.00`}</span>
					</p>
				</Totales>
				<Totales>
					<p>
						Total:{" "}
						<span>{`$${+pedidoDetalle[0].total_VP + costoEnvio}.00`}</span>
					</p>
				</Totales>
			</Content>
		</Modal>
	);
};

export default DetallesCompra;

const Content = styled.div`
	& {
		display: flex;
		min-width: 100%;
		flex-wrap: wrap;
		justify-content: space-around;
		overflow: auto;
	}

	h3 {
		color: black;
		margin: 0;
		padding: 0;
		text-align: left;
		width: 85%;
		font-weight: bold;
	}
`;

const Totales = styled.div`
    display: flex;
    flex-basis: 80%;
    justify-content: end;
    font-size: 0.65em;

    p {
        font-size: 1em;
		color: black;
		font-weight: bold;
        margin: 0;
        padding 5px;
        border-bottom: ${({ border }) => (border ? "1px solid #000" : "none")};
        
        span {
            font-weight: normal;
            font-size: 1em;
        }
	}

`;

const Form = styled.form`
	& {
		flex-basis: ${(props) => props.width || "50%"};
		display: flex;
		align-items: center;
		text-align: left;
		justify-content: space-evenly;
		font-size: 0.65em;
		color: black;
		font-weight: bold;
	}

	select {
		border: none;
		border-bottom: 1px solid #000;
		text-align: center;
		font-size: 1em;
	}

	button {
		width: 35px;
		border: none;
		cursor: pointer;

		img {
			object-fit: cover;
			width: 100%;
		}
	}

	span {
		font-weight: normal;
		font-size: 1em;
	}
`;
