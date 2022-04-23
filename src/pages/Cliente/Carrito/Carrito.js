import "./styles.css";
import ProductoCarrito from "components/ProductoCarrito/ProductoCarrito";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Product from "services/mercadoPAgo";
import realizarcompra from "services/realizarcompra";
const FORM_ID = "payment-form";

const Carrito = ({ data, tamano, quitar }) => {
  const [Total, setTotal] = useState(0);
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  let estado = query.get("status");
  let id_pago = query.get("payment_id");
  const dataCompra = {};
  useEffect(() => {
    setTotal(
      data
        .map((producto) => producto.precio_PR * producto.cantidad_CA)
        .reduce((prev, curr) => prev + curr, 0)
    );
    if (estado == "approved") {
      var total = data
        .map((producto) => producto.precio_PR * producto.cantidad_CA)
        .reduce((prev, curr) => prev + curr, 0);

      var inversion_total = data
        .map((producto) => producto.inversion_PR * producto.cantidad_CA)
        .reduce((prev, curr) => prev + curr, 0);
      dataCompra.id_cliente = 2;
      dataCompra.productos = data;
      dataCompra.totalCompra = total;
      dataCompra.inversion_total = inversion_total;
      console.log(JSON.stringify(dataCompra));
      realizarcompra(dataCompra).then((response) => {
        if (response) {
          quitar("Compra");
        } else {
        }
      });
    }
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
          {/* <button>Comprar</button> */}
          <Product datos={data} />
        </div>
      </div>
    </div>
  );
};

export default Carrito;
