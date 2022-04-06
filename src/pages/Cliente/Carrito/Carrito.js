import "./styles.css";
import ProductoCarrito from "components/ProductoCarrito/ProductoCarrito";
import { useEffect, useState } from "react";
const Carrito = ({ data, tamano, quitar }) => {
  const [Total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      data
        .map((producto) => producto.precio_PR * producto.cantidad_CA)
        .reduce((prev, curr) => prev + curr, 0)
    );
  }, [data]);
  return (
    <div className="container-principal">
      <div className="container-carrito">
        <div className="container-carrito__titulo">
          <h3>Carrito ({tamano})</h3>
        </div>
        <div className="container-carrito__productos">
          <div className="container-carrito__producto">
            {data.map((dato) => (
              <ProductoCarrito
                datos={dato}
                funcion1={quitar}
                key={dato.id_PR}
              />
            ))}
          </div>
        </div>
        <div className="container-carrito__direccion">
          <div className="container-carrito_dir">
            <h3>Direccion de envio</h3>
            <p>Federico Allende 3928</p>
            <p>col.Jardines de la barranca</p>
            <p>C.P 44729</p>
          </div>
          <div className="container-carrito_total">
            <h3>Total De productos</h3>
            <h3>{"$" + Total}</h3>
          </div>
        </div>
        <div className="container-carrito_botonComprar">
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
