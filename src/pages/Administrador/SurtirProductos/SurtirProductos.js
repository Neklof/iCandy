import React, { useRef, useState } from "react";
import getProductosInventario from "services/getProductosInventario";
import { useEffect } from "react";
import "./styles.css";
import addSurtirProductos from "services/addSurtirProductos";

const defaultState = {
  nombre: "",
  cantidad: "",
};

function Row({ onChange, onRemove, nombre, cantidad }) {
  const [producto, setProducto] = useState("");
  const [productos, setProductos] = useState([]);

  const id_Producto = useRef();

  const buscador = (e) => {
    const find = productos.find(
      (producto) => producto.id_PR === e.target.value
    );

    if (find) {
      alert("Se encontro el producto: " + find.nombre_PR);
      onChange("nombre", e.target.value);
      setProducto(find.nombre_PR);
    } else {
      alert("El producto no existe o no esta disponible");
    }
  };
  useEffect(() => {
    getProductosInventario().then((response) => setProductos(response));
  }, []);

  return (
    <div className="card-container">
      <input
        value={nombre}
        // onChange={(e) => onChange("nombre", e.target.value)}
        onChange={(e) => buscador(e)}
        ref={id_Producto}
        placeholder="Código"
      />
      <input
        placeholder="Producto"
        defaultValue={producto}
        //onChange={(e) => onChange("email", e.target.value)}
        disabled="disabled"
      />
      <input
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => onChange("cantidad", e.target.value)}
      />
      <button className="btn-eliminar" onClick={onRemove}>
        X
      </button>
    </div>
  );
}

export default function SurtirProductos() {
  const [rows, setRows] = useState([defaultState]);

  const handleOnChange = (index, name, value) => {
    const copyRows = [...rows];
    copyRows[index] = {
      ...copyRows[index],
      [name]: value,
    };
    setRows(copyRows);
  };

  const handleOnAdd = () => {
    setRows(rows.concat(defaultState));
  };

  const handleOnRemove = (index) => {
    const copyRows = [...rows];
    copyRows.splice(index, 1);
    setRows(copyRows);
  };

  const surtirProducto = () => {
    addSurtirProductos(rows).then((response) => {
      if (response) {
        alert("Los productos se surtieron");
      } else {
        alert("No se realizó la operación");
      }
    });

    // const surtir = JSON.stringify(rows);
    // // console.log(rows);
    // console.log(surtir);
  };

  return (
    <div className="SurtirProducto-Principal">
      <div className="div-titulo">
        <h3>Código</h3>
        <h3>Producto</h3>
        <h3>Cantidad</h3>
      </div>
      <div className="SurtirProdcto">
        {rows.map((row, index) => (
          <Row
            {...row}
            onChange={(name, value) => handleOnChange(index, name, value)}
            onRemove={() => handleOnRemove(index)}
            key={index}
          />
        ))}
        <button className="btn-agregar" onClick={handleOnAdd}>
          +
        </button>
      </div>

      <div className="container-btn-surtir">
        <button className="btn-surtir" onClick={surtirProducto}>
          {" "}
          Surtir productos{" "}
        </button>
      </div>
    </div>
  );
}
