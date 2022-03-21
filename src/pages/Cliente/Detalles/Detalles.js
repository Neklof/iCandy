import "./styles.css";
import { useState } from "react";
import image from "assets/Img/nugs.png";
import newProduct from "assets/Img/new_product.png";
import Card from "../Inicio/Card";

const Detalles = () => {
	const [cantidad, setCantidad] = useState(1);
	const DISPONIBLE = 5;
	const PRECIO = 38;

	const handleIncrement = () =>
		setCantidad(cantidad == DISPONIBLE ? DISPONIBLE : cantidad + 1);
	const handleDecrement = () =>
		setCantidad(cantidad == 1 ? cantidad : cantidad - 1);

	return (
		<div className="detalles-aux">
			<div className="detalles-container">
				<div className="detalles-filtros">
					<p>{"Inicio > Chocolates"}</p>
					<button className="detalles-filtros-btn">
						<img
							alt=""
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB7UlEQVRIie2Wv2sTYRjHP8/dGVNU8AdSBIdEkRBTtQFxi7Sa/gndddTFTbqlLi4uTnYVnDyLjrW2pt0d0mJjAoKXyUEoVQQT2jf3ONjEJJBc74jSIZ/teXif5/u8PPc878GIQ09xM0VxMxU13Aod4bo2q+XX+HYV366yurXIvIbOI51GqfJ5CpG1QQErdZ+H27tdvidnYuTHArRVp7PpS+stM3Sl35r+gXxBOD1mDTWPBgWkYnLagXtmP9YR9tJHrAVUdwKkap2W9Ds2kPflG6APAFCekp/4ECnPiP9BtB73Y6WcBZ3Ckiq3M0sHFi553kkaZjKK5tzOXu7dL51X/iyTi468WhyPPWsfiDsb2WTye8vsHqeGmQxaIP34ahRF27bXZLaOzI61rtYw00D0BdIP6emaqGJ1FNJL943jzsZ+ZaE555D7uCsFRW2AhCPuUVhA9W/urkKHSXHrGk1uIVIhn3k71NwjohLcY9e1OZW5j+gMUEEbj5m5/mOowqWKlwBzp9M3t21uLjea7S894ciXN+OxF+GlnOfZdLL9NPa8xyaBSKHTU/O7H/ma0Qs/lcIJK+RAqFkH2sKBC+Rsj8BxSzg2hCEMTrH8aQLbXwLOg9TBv0v+yst/Lwyw5sXx65eJGY/c1YBfnBGHjN8RH5wKf6/czAAAAABJRU5ErkJggg=="
						/>
						<p>Filtrar</p>
					</button>
				</div>
				<div className="detalles-producto">
					<div className="detalles-producto-container-image">
						<img
							className="detalles-producto-new"
							src={newProduct}
							alt="producto nuevo"
						/>
						<img
							className="detalles-producto-image"
							src={image}
							alt="producto"
						/>
					</div>
					<div className="detalles-producto-compra">
						<p className="detalles-producto-nombre">
							Nugs
							<span>Disponible</span>
						</p>
						<p className="detalles-producto-precio">
							Precio: <span>{`$${PRECIO}.00`}</span>
						</p>
						<p className="detalles-producto-total">
							Total <br />
							<span>{`$${PRECIO * cantidad}.00`}</span>
						</p>
						<div className="detalles-producto-incremento">
							<button className="" onClick={handleDecrement}>
								-
							</button>
							<p className="">{cantidad}</p>
							<button className="" onClick={handleIncrement}>
								+
							</button>
						</div>
						<p className="detalles-producto-disponible">
							{DISPONIBLE} Disponibles
						</p>
						<div className="detalles-producto-botones">
							<button className="detalles-producto-comprar-btn">Comprar</button>
							<button className="detalles-producto-carrito-btn">
								Añadir al carrito
							</button>
						</div>
					</div>
				</div>
				<div className="detalles-descripcion">
					<p className="detalles-descripcion-h">Descripcion</p>
					<div className="detalles-descripcion-detalles">
						<p id="detalles-descripcion-p">
							Deliciosa barrita de cajeta con cacahuates, cubierta de chocolate
						</p>
						<p>
							Cantidad: <span>12 nugs por paquete</span>
						</p>
						<p>
							Gramos por pieza: <span>28 gramos</span>
						</p>
					</div>
				</div>
				<div className="detalles-relacionados">
					<p>Podría interesarte</p>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Detalles;
