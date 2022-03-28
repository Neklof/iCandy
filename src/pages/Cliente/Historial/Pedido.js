import image from "assets/Img/editar.png";

const Pedido = ({ datos, handleDetalles }) => {
	return (
		<div className="caja-historial-item">
			<div className="caja-historial-item-info">
				<div className="caja-historial-item-info-image">
					<img src={image} alt="imagen-pedido" />
				</div>
				<div className="caja-historial-item-info-container">
					<p>
						Pedido: <span>{datos.id_VP}</span>
					</p>
					<p>
						{datos.estado_VP != "Cancelado"
							? `Llega el día: ${datos.fechaDeEntrega_VP}`
							: "N/A"}
					</p>
					<p>
						{datos.estado_VP == "Pendiente" && "Pendiente de validar"}
						{datos.estado_VP == "Cancelado" && "Pedido cancelado"}
						{datos.estado_VP == "Activo" && "En preparación"}
						{datos.estado_VP == "Entregado" && "Pedido entregado"}
					</p>
					<p className="caja-historial-item-info-productos">Hola</p>
				</div>
			</div>
			<div className={`caja-historial-item-status estado_${datos.estado_VP}`}>
				{datos.estado_VP}
			</div>
			<div className="caja-historial-item-button-container">
				<button
					onClick={handleDetalles}
					className="caja-historial-item-button"
					name={`${datos.id_VP}`}
				>
					Ver compra
				</button>
			</div>
		</div>
	);
};

export default Pedido;
