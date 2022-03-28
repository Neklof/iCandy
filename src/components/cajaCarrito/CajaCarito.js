import "./style.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import deletCarrito from "services/deletCarrito";
const CajaCarrito = ({ datos, funcion1 }) => {
  useEffect(() => {}, []);

  const Eliminar = () => {
    const id = { id_PR: datos.id_PR };
    deletCarrito(id).then((response) => {
      if (response) {
        funcion1();
      } else {
        // alertaError("¡ups algo salio mal!");
      }
    });
  };

  return (
    <div className="contenedor-cajaCarrito">
      <img src={datos.foto_PR} alt="" className="imagenCarrito" />

      <div className="cajaCarrito-contenedor">
        <div className="cajaCarrito-detalles">
          <button className="detalles-eliminar" onClick={Eliminar}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <p>{datos.nombre_PR}</p>
          <p className="precio">${datos.precio_PR}</p>
        </div>

        <div className="cajaCarrito-incremento">
          <button id="rojo">-</button>
          <div className="numeros">
            <p>1</p>
          </div>
          <button id="azul">+</button>
        </div>
      </div>
    </div>
  );
};

export default CajaCarrito;
