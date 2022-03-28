import { Link } from "react-router-dom";
import image from "assets/Img/nugs.png";
import shoppingCart from "assets/Img/shopping-cart.png";
import newProduct from "assets/Img/new_product.png";
import addCarrito from "services/addCarrito";

import { useEffect, useState, useRef } from "react";
import PubSub from "pubsub-js";

const Card = ({ producto, funcion1 }) => {
  //const [tempcantidad, setTempcantidad] = useState(0);
  const objcarrito = {};
  const handleProductoCarrito = () => {
    objcarrito.id_C = 2;
    objcarrito.id_PR = producto.id_PR;
    objcarrito.cantidad_PR = 1;
    addCarrito(objcarrito).then((response) => {
      if (response) {
        funcion1();
      } else {
        // alertaError("¡ups algo salio mal!");
      }
    });
    // console.log(JSON.stringify(objcarrito));

    //setTempcantidad(tempcantidad + 1);
  };
  return (
    <div className="inicio-card-container">
      <div className="inicio-card">
        <Link className="inicio-card-link" to={`/detalles/${producto.id_PR}`}>
          {producto.novedad_PR == true && (
            <img
              className="inicio-card-new"
              src={newProduct}
              alt="producto nuevo"
            />
          )}
          <div className="inicio-card-container-image">
            <img
              className="inicio-card-image"
              src={producto.foto_PR}
              alt={producto.nombre_PR}
            />
          </div>
          <div className="inicio-card-detalles">
            <p className="card-detalles-nombre">
              {producto.nombre_PR} <br />
              <span>{`${producto.unidadPeso_PR} ${producto.nombreDescripcion_PR}`}</span>
            </p>
            <p className="card-detalles-precio">{`$${producto.precio_PR}.00`}</p>
          </div>
        </Link>
        <div className="inicio-card-botones">
          <p className="card-botones-disponible">
            Disponibles: <span>{producto.cantidad_PR}</span>
          </p>
          <button
            className="card-botones-carrito"
            onClick={handleProductoCarrito}
          >
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
