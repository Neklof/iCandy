import React, { useState } from "react";
import getProductosInventario from "services/getProductosInventario";
import { useEffect } from "react";
import "./styles.css";

const defaultState = {
  nombre: "",
  cantidad: "",
};

function Row({ onChange, onRemove, nombre, cantidad }) {
  const [producto, setProducto] = useState("");
  const [productos, setProductos] = useState([]);

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
    const surtir = JSON.stringify(rows);
    console.log(surtir);
  };

  return (
    <div className="SurtirProdcto">
      <h1>Surtir productos</h1>
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
      <button className="btn-surtir" onClick={surtirProducto}>
        {" "}
        Surtir productos{" "}
      </button>
    </div>
  );
}
