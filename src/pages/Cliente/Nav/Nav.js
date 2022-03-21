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
	const [menuPerfil, setMenuPerfil] = useState(false);

	const handleMenuBtn = () => setMenuModal(!menuModal);
	const handlePerfilBtn = () => setMenuPerfil(!menuPerfil);
	const handleModalOff = () => {
		setMenuModal(false);
		setMenuPerfil(false);
	};

	return (
		<>
			<div className="nav-aux">
				<div className="nav-container">
					<Link
						onClick={handleModalOff}
						className="nav-logo-container"
						to={"/"}
					>
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
						<img className="nav-carrito-img" src={shoppingCart} alt="carrito" />
					</button>
					<div
						className={`nav-menu-modal ${!menuModal && "componente-oculto"}`}
					>
						<div className="nav-menu-links nav-menu-link-profile">
							<Link
								className="nav-menu-link-login nav-menu-link-login-movil"
								onClick={handleMenuBtn}
								to="/login"
							>
								<img
									className="nav-menu-link-img"
									src={defaultProfileImage}
									alt="foto del perfil"
								/>{" "}
								Iniciar sesión
							</Link>
							<button
								className="nav-menu-link-login nav-menu-link-login-escritorio"
								onClick={handlePerfilBtn}
							>
								<img
									className="nav-menu-link-img"
									src={defaultProfileImage}
									alt="foto del perfil"
								/>{" "}
								Iniciar sesión
							</button>
							{menuPerfil && (
								<div className="nav-menu-perfil">
									<Link
										onClick={handlePerfilBtn}
										className="nav-menu-perfil-link"
										to={"/login"}
									>
										Ver Perfil
									</Link>
									<Link
										onClick={handlePerfilBtn}
										className="nav-menu-perfil-link"
										to={"/historial"}
									>
										Historial de compras
									</Link>
									<button className="nav-menu-perfil-link" onClick={() => {}}>
										Cerrar Sesión
									</button>
								</div>
							)}
						</div>
						<div className="nav-menu-group">
							<Link onClick={handleModalOff} className="nav-menu-link" to="/">
								Inicio
							</Link>
							<Link
								onClick={handleModalOff}
								className="nav-menu-link"
								to="/about"
							>
								Sobre nosotros
							</Link>
							<Link
								onClick={handleModalOff}
								className="nav-menu-link"
								to="/contact"
							>
								Contacto
							</Link>
							<Link
								onClick={handlePerfilBtn}
								className="nav-menu-link nav-perfil-menu-link-movil"
								to={"/historial"}
							>
								Historial de compras
							</Link>
							<button
								className="nav-menu-link-btn nav-perfil-menu-link-movil"
								onClick={() => {}}
							>
								Cerrar Sesión
							</button>
						</div>
					</div>
				</div>
			</div>
			{(menuModal || menuPerfil) && (
				<div className="nav-close-overlay" onClick={handleModalOff} />
			)}
		</>
	);
};

export default Nav;
