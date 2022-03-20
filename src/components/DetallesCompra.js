import styled from "styled-components";
import Modal from "./Modal";
import CampoDetalles from "./CampoDetalles";
import TablaDetalles from "./TablaDetalles";

const DetallesCompra = ({ modalDetalles, setModalDetalles }) => {
	return (
		<Modal
			ventanaModal={modalDetalles}
			setVentanaModal={setModalDetalles}
			encabezado={true}
			titulo="Detalles de la compra"
		>
			<Content>
				<CampoDetalles nombre="Nombre: " dato={"Karl Albert"} width={"33%"} />
				<CampoDetalles nombre="Teléfono: " dato={"3316914205"} width={"33%"} />
				<CampoDetalles
					nombre="Estatus: "
					dato={"En preparación"}
					width={"33%"}
				/>
				<CampoDetalles
					nombre="Fecha del pedido: "
					dato={"14 de febrero del 2022"}
				/>
				<CampoDetalles
					nombre="Fecha de entrega: "
					dato={"14 de febrero del 2022"}
				/>
				<CampoDetalles nombre="Moneda: " dato={"MXN"} width={"100%"} />
				<CampoDetalles
					nombre="Dirección: "
					dato={
						"La Paz NO. 56 3 Col. Santa Cruz Seridero. Gustavo A. Madero, Ciudad de México Cp 2345 México"
					}
					width={"100%"}
				/>
				<h3>Productos</h3>
				<TablaDetalles />
				<Totales>
					<p>
						Envio: <span>$10.00</span>
					</p>
				</Totales>
				<Totales border={true}>
					<p>
						Subtotal: <span>$10.00</span>
					</p>
				</Totales>
				<Totales>
					<p>
						Total: <span>$10.00</span>
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
