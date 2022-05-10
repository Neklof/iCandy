import "./styles.css";
import { useEffect, useState } from "react";
import getProductos from "services/getProductos";
import Card from "./Card";
import Paginador from "./Paginador";
import { useParams, Link } from "react-router-dom";

const PRODUCTOS_PER_PAGE = 12;

const Inicio = ({ funcion }) => {
	const { page } = useParams();
	const [productos, setProductos] = useState({});
	const [productosPaginados, setProductosPaginados] = useState({});
	const [paginador, setPaginador] = useState(page || 1);
	const [paginas, setPaginas] = useState(1);

	// const [actualizar, setActualizar] = useState(false);
	// const handleEstado = () => {
	// 	actualizar ? setActualizar(false) : setActualizar(true);
	// };

	useEffect(() => {
		getProductos().then((response) => {
			setPaginas(Math.ceil(response.length / PRODUCTOS_PER_PAGE));
			setProductos(Object.values(response));

			let min = page ? (page - 1) * PRODUCTOS_PER_PAGE : 0;
			// let max = page != paginas ? page * PRODUCTOS_PER_PAGE : undefined;
			let max = page
				? page != paginas
					? page * PRODUCTOS_PER_PAGE
					: undefined
				: PRODUCTOS_PER_PAGE;

			setProductosPaginados(
				Object.values(response)
					.filter((product) => product.discontinuo_PR == "0")
					.slice(min, max)
			);
		});
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		let min = page ? (page - 1) * PRODUCTOS_PER_PAGE : 0;
		let max = page
			? page != paginas
				? page * PRODUCTOS_PER_PAGE
				: undefined
			: PRODUCTOS_PER_PAGE;

		setProductosPaginados(
			Object.values(productos)
				.filter((product) => product.discontinuo_PR == "0")
				.slice(min, max)
		);
		setPaginador(page || 1);
	}, [page]);

	return (
		<div className="inicio-container">
			<div className="inicio-filtros">
				<p>
					<Link to="/">Inicio</Link>
				</p>
				<button className="inicio-filtros-btn">
					<img
						alt=""
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB7UlEQVRIie2Wv2sTYRjHP8/dGVNU8AdSBIdEkRBTtQFxi7Sa/gndddTFTbqlLi4uTnYVnDyLjrW2pt0d0mJjAoKXyUEoVQQT2jf3ONjEJJBc74jSIZ/teXif5/u8PPc878GIQ09xM0VxMxU13Aod4bo2q+XX+HYV366yurXIvIbOI51GqfJ5CpG1QQErdZ+H27tdvidnYuTHArRVp7PpS+stM3Sl35r+gXxBOD1mDTWPBgWkYnLagXtmP9YR9tJHrAVUdwKkap2W9Ds2kPflG6APAFCekp/4ECnPiP9BtB73Y6WcBZ3Ckiq3M0sHFi553kkaZjKK5tzOXu7dL51X/iyTi468WhyPPWsfiDsb2WTye8vsHqeGmQxaIP34ahRF27bXZLaOzI61rtYw00D0BdIP6emaqGJ1FNJL943jzsZ+ZaE555D7uCsFRW2AhCPuUVhA9W/urkKHSXHrGk1uIVIhn3k71NwjohLcY9e1OZW5j+gMUEEbj5m5/mOowqWKlwBzp9M3t21uLjea7S894ciXN+OxF+GlnOfZdLL9NPa8xyaBSKHTU/O7H/ma0Qs/lcIJK+RAqFkH2sKBC+Rsj8BxSzg2hCEMTrH8aQLbXwLOg9TBv0v+yst/Lwyw5sXx65eJGY/c1YBfnBGHjN8RH5wKf6/czAAAAABJRU5ErkJggg=="
					/>
					<p>Filtrar</p>
				</button>
			</div>
			<div className="inicio-cards">
				{Object.values(productosPaginados).map((producto) => (
					<Card key={producto.id_PR} producto={producto} funcion1={funcion} />
				))}
			</div>
			<Paginador paginador={paginador} paginas={paginas} />
		</div>
	);
};

export default Inicio;
