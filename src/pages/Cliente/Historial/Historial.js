import "./styles.css";
import "pages/Administrador/Pedidos/styles.css";
import ContenedorHistorial from "./ContenedorHistorial";
import getDetallesPedido from "services/getDetallesPedido";
import { useState, useEffect } from "react";
import getHistorial from "services/getHistorial";
import Pedido from "./Pedido";
import DetallesCompra from "components/DetallesCompra";
import Buscador from "components/Buscador";
import { Link } from "react-router-dom";

const Historial = () => {
  const [historialCliente, setHistorialCliente] = useState([]);
  const [modalHistorial, setModalHistorial] = useState(false);
  const [pedidoDetalle, setPedidoDetalle] = useState({});
  const [pedidoProductos, setPedidoProductos] = useState({});
  const [keyword, setKeyword] = useState("");

  const [fechas, setFechas] = useState([]);
  const CLIENTE = 1;

  const handleDetalles = (e) => {
    getDetallesPedido(e.target.name).then((response) => {
      setPedidoDetalle(response.detallesPedido);
      setPedidoProductos(response.detallesProductos);
      setModalHistorial(!modalHistorial);
    });
  };

  useEffect(() => {
    getHistorial(CLIENTE).then((response) => {
      setHistorialCliente(response);

      let fechasAux = [];
      let fechaActual = null;
      Object.values(response).map((fila) => {
        if (fechaActual != fila.fecha_VP) {
          fechasAux.push(fila.fecha_VP);
          fechaActual = fila.fecha_VP;
        }
      });
      setFechas([...fechasAux]);
    });
  }, []);

  useEffect(() => {
    let fechasAux = [];
    let fechaActual = null;

    const response = Object.values(historialCliente).filter((fila) => {
      return Object.keys(fila).reduce(
        (previous, current) =>
          previous +
          fila[current].toLowerCase().includes(keyword.trim().toLowerCase()),
        false
      );
    });

    Object.values(response).map((fila) => {
      if (fechaActual != fila.fecha_VP) {
        fechasAux.push(fila.fecha_VP);
        fechaActual = fila.fecha_VP;
      }
    });
    setFechas([...fechasAux]);
  }, [keyword]);

  return (
    <>
      <div className="historial-aux">
        <div className="historial-container">
          <div className="historial-filtros">
            <p>
              <Link to="/profile">Usuario</Link> {" > "}{" "}
              <Link to="/historial">Historial</Link>
            </p>
            {/* <div className="historial-filtros-select-container">
							<button className="historial-filtros-btn">
								<img
									alt=""
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB7UlEQVRIie2Wv2sTYRjHP8/dGVNU8AdSBIdEkRBTtQFxi7Sa/gndddTFTbqlLi4uTnYVnDyLjrW2pt0d0mJjAoKXyUEoVQQT2jf3ONjEJJBc74jSIZ/teXif5/u8PPc878GIQ09xM0VxMxU13Aod4bo2q+XX+HYV366yurXIvIbOI51GqfJ5CpG1QQErdZ+H27tdvidnYuTHArRVp7PpS+stM3Sl35r+gXxBOD1mDTWPBgWkYnLagXtmP9YR9tJHrAVUdwKkap2W9Ds2kPflG6APAFCekp/4ECnPiP9BtB73Y6WcBZ3Ckiq3M0sHFi553kkaZjKK5tzOXu7dL51X/iyTi468WhyPPWsfiDsb2WTye8vsHqeGmQxaIP34ahRF27bXZLaOzI61rtYw00D0BdIP6emaqGJ1FNJL943jzsZ+ZaE555D7uCsFRW2AhCPuUVhA9W/urkKHSXHrGk1uIVIhn3k71NwjohLcY9e1OZW5j+gMUEEbj5m5/mOowqWKlwBzp9M3t21uLjea7S894ciXN+OxF+GlnOfZdLL9NPa8xyaBSKHTU/O7H/ma0Qs/lcIJK+RAqFkH2sKBC+Rsj8BxSzg2hCEMTrH8aQLbXwLOg9TBv0v+yst/Lwyw5sXx65eJGY/c1YBfnBGHjN8RH5wKf6/czAAAAABJRU5ErkJggg=="
								/>
								<p>Filtrar</p>
							</button>
							<div className="historial-filtros-select">
								<select name="" id="">
									<option value="agotado">Agotado</option>
								</select>
							</div>
						</div> */}
          </div>
          <h1 className="historial-titulo">Compras</h1>
          <div className="historial-buscador-container">
            <div className="historial-buscador">
              <Buscador keyword={setKeyword}></Buscador>
            </div>
          </div>
          <div className="historial-pedidos-container">
            {fechas.map((fecha) => (
              <ContenedorHistorial key={fecha} fecha={fecha}>
                {Object.values(historialCliente)
                  .filter((fila) => {
                    return Object.keys(fila).reduce(
                      (previous, current) =>
                        previous +
                        fila[current]
                          .toLowerCase()
                          .includes(keyword.trim().toLowerCase()),
                      false
                    );
                  })
                  .map(
                    (fila) =>
                      fecha === fila.fecha_VP && (
                        <Pedido
                          key={fila.id_VP}
                          datos={fila}
                          handleDetalles={handleDetalles}
                        />
                      )
                  )}
              </ContenedorHistorial>
            ))}
            {/* <ContenedorHistorial historialCliente={historialCliente} /> */}
          </div>
        </div>
      </div>
      {Object.keys(pedidoDetalle).length !== 0 &&
        Object.keys(pedidoProductos).length !== 0 && (
          <DetallesCompra
            modalDetalles={modalHistorial}
            setModalDetalles={setModalHistorial}
            pedidoDetalle={pedidoDetalle}
            pedidoProductos={pedidoProductos}
            usuario={"Cliente"}
            font="1.9em"
          />
        )}
    </>
  );
};

export default Historial;
