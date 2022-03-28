import "./styles.css";
import { useEffect, useState } from "react";
import getProductos from "services/getProductos";
import Card from "./Card";
import CajaCarrito from "components/cajaCarrito/CajaCarito";

const Inicio = ({ funcion }) => {
  const [productos, setProductos] = useState({});
  // const [actualizar, setActualizar] = useState(false);
  // const handleEstado = () => {
  //   actualizar ? setActualizar(false) : setActualizar(true);
  // };

  useEffect(() => {
    getProductos().then((response) => setProductos(Object.values(response)));
  }, []);

  return (
    <div className="inicio-container">
      <div className="inicio-filtros">
        <p>{"Inicio > Chocolates"}</p>
        <button className="inicio-filtros-btn">
          <img
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB7UlEQVRIie2Wv2sTYRjHP8/dGVNU8AdSBIdEkRBTtQFxi7Sa/gndddTFTbqlLi4uTnYVnDyLjrW2pt0d0mJjAoKXyUEoVQQT2jf3ONjEJJBc74jSIZ/teXif5/u8PPc878GIQ09xM0VxMxU13Aod4bo2q+XX+HYV366yurXIvIbOI51GqfJ5CpG1QQErdZ+H27tdvidnYuTHArRVp7PpS+stM3Sl35r+gXxBOD1mDTWPBgWkYnLagXtmP9YR9tJHrAVUdwKkap2W9Ds2kPflG6APAFCekp/4ECnPiP9BtB73Y6WcBZ3Ckiq3M0sHFi553kkaZjKK5tzOXu7dL51X/iyTi468WhyPPWsfiDsb2WTye8vsHqeGmQxaIP34ahRF27bXZLaOzI61rtYw00D0BdIP6emaqGJ1FNJL943jzsZ+ZaE555D7uCsFRW2AhCPuUVhA9W/urkKHSXHrGk1uIVIhn3k71NwjohLcY9e1OZW5j+gMUEEbj5m5/mOowqWKlwBzp9M3t21uLjea7S894ciXN+OxF+GlnOfZdLL9NPa8xyaBSKHTU/O7H/ma0Qs/lcIJK+RAqFkH2sKBC+Rsj8BxSzg2hCEMTrH8aQLbXwLOg9TBv0v+yst/Lwyw5sXx65eJGY/c1YBfnBGHjN8RH5wKf6/czAAAAABJRU5ErkJggg=="
          />
          <p>Filtrar</p>
        </button>
      </div>
      <div className="inicio-cards">
        {Object.values(productos).map((producto) => (
          <Card key={producto.id_PR} producto={producto} funcion1={funcion} />
        ))}
      </div>
      <div className="inicio-paginador">
        <p>{"< | 1 2 3 4 5 | >"}</p>
      </div>
    </div>
  );
};

export default Inicio;
