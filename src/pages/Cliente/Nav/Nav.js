import "./styles.css";
import Buscador from "components/Buscador";
import { useState } from "react";
import menu from "assets/Img/menu.png";
import shoppingCart from "assets/Img/shopping-cart.png";
import logo_2 from "assets/Img/logo_2.png";
import logo from "assets/Img/logo.png";
import defaultProfileImage from "assets/Img/default-profile-image.png";
import { Link } from "react-router-dom";

const Nav = () => {
	const [search, setSearch] = useState("");
	const [menuModal, setMenuModal] = useState(false);

	const handleMenuBtn = () => setMenuModal(!menuModal);

	return (
		<>
			<div className="nav-aux">
				<div className="nav-container">
					<Link className="nav-logo-container" to={"/"}>
						<img
							className="nav-logo nav-logo-escritorio"
							src={logo}
							alt="logo"
						/>
						<img className="nav-logo nav-logo-movil" src={logo_2} alt="logo" />
					</Link>
					<div className="nav-search">
						<Buscador keyword={setSearch} filter={false} />
					</div>
					<button className="nav-menu nav-icon" onClick={handleMenuBtn}>
						<img className="nav-menu-img" src={menu} alt="menu" />
					</button>
					<button className="nav-carrito nav-icon">
						<img className="nav-carrito-img" src={shoppingCart} alt="menu" />
					</button>
					<div
						className={`nav-menu-modal ${!menuModal && "componente-oculto"}`}
					>
						<Link className="nav-menu-link nav-menu-link-profile" to="/login">
							<img
								className="nav-menu-link-img"
								src={defaultProfileImage}
								alt="foto del perfil"
							/>{" "}
							Iniciar sesión
						</Link>
						<div className="nav-menu-group">
							<Link className="nav-menu-link" to="/">
								Inicio
							</Link>
							<Link className="nav-menu-link" to="/about">
								Sobre nosotros
							</Link>
							<Link className="nav-menu-link" to="/contact">
								Contacto
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
