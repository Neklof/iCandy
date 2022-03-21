import { Link } from "react-router-dom";
import image from "assets/Img/nugs.png";
import shoppingCart from "assets/Img/shopping-cart.png";
import newProduct from "assets/Img/new_product.png";

const Card = () => {
	return (
		<div className="inicio-card-container">
			<div className="inicio-card">
				<Link className="inicio-card-link" to={"/detalles"}>
					<img
						className="inicio-card-new"
						src={newProduct}
						alt="producto nuevo"
					/>
					<div className="inicio-card-container-image">
						<img className="inicio-card-image" src={image} alt="nugs" />
					</div>
					<div className="inicio-card-detalles">
						<p className="card-detalles-nombre">
							Nuggs <br />
							<span>336g 12pz</span>
						</p>
						<p className="card-detalles-precio">$33.00</p>
					</div>
				</Link>
				<div className="inicio-card-botones">
					<p className="card-botones-disponible">
						Disponibles: <span>10</span>
					</p>
					<button className="card-botones-carrito">
						<img
							className="card-botones-img"
							src={shoppingCart}
							alt="carrito"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
