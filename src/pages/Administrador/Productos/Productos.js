import "../Usuarios/styles.css";
import Button from "components/Button";
import getProductosInventario from "services/getProductosInventario";
import { useEffect, useState } from "react";
import RegistrarProducto from "./RegistrarProducto";
import ModificarProducto from "./ModificarProducto";
import DetallesProducto from "./DetallesProducto";
import Table from "components/Table";
import AdminBuscador from "components/AdminBuscador";
import React, { Component } from "react";
import PubSub from "pubsub-js";

const CAMPOS = [
  "ID",
  "Producto",
  "Cantidad",
  "Precio",
  "Modificar",
  "Eliminar",
  "Detalles",
];

const eliminar = (e) => alert(e.target.className);
const detalles = (e) => alert(e.target.className);

// const find = {};
//const funciones = [handleUpdate, eliminar,detalles];

const Productos = () => {
  const [modalProducto, setModalProducto] = useState(false);
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState("");
  const [addProducto, setAddProducto] = useState(false);

  const [idProducto, setIdProducto] = useState(0);
  const [poderosoJson, setPoderosoJson] = useState({});

  //Modificar producto
  const [modalModificarProducto, setModalModificarProducto] = useState(false);
  const [modalDetallesProducto, setModalDetallesProducto] = useState(false);

  //Funcion para modal de modificar
  const handleUpdate = (e) => {
    //const id = e.target.className;

    const find = productos.find(
      (producto) => producto.id_PR === e.target.className
    );
    setIdProducto(e.target.className);
    setModalModificarProducto(!modalModificarProducto);
    setPoderosoJson(Object.values(find));

    PubSub.publish("saludo", Object.values(find));
  };

  const handleAdd = () => {
    setModalProducto(!modalProducto);
  };

  const handleDetal = (e) => {
    const find = productos.find(
      (producto) => producto.id_PR === e.target.className
    );
    setIdProducto(e.target.className);
    setModalDetallesProducto(!modalModificarProducto);
    setPoderosoJson(Object.values(find));
  };

  useEffect(() => {
    getProductosInventario().then((response) => setProductos(response));
  }, []);

  const nuevas_propiedades = productos.map((producto) => ({
    id_PR: producto.id_PR,
    nombre_PR: producto.nombre_PR,
    cantidad_PR: producto.cantidad_PR,
    precio_PR: producto.precio_PR,
  }));

  // console.log(nuevas_propiedades);

  return (
    <>
      <AdminBuscador keyword={setSearch} />
      <Table
        campos={CAMPOS}
        datos={Object.values(nuevas_propiedades)}
        filtro="nombre_PR"
        search={search}
        tipo={2}
        funciones={[handleUpdate, eliminar, handleDetal]} //modificar, eliminar, detalles
      />

      <div className="contenedor-button">
        <Button onClick={handleAdd}>Agregar producto</Button>
      </div>

      <RegistrarProducto
        modalProducto={modalProducto}
        setModalProducto={setModalProducto}
        addProducto={addProducto}
        setAddProducto={setAddProducto}
      />

      <ModificarProducto
        modalModificarProducto={modalModificarProducto}
        setModalModificarProducto={setModalModificarProducto}
        addProducto={addProducto}
        setAddProducto={setAddProducto}
        idProducto={idProducto}
        poderosoJson={poderosoJson}
      />
      {/* <DetallesProducto
        modalDetallesProducto={modalDetallesProducto}
        setModalDetallesProducto={setModalDetallesProducto}
        addProducto={addProducto}
        setAddProducto={setAddProducto}
        idProducto={idProducto}
        poderosoJson={poderosoJson}
      /> */}
    </>
  );
};

export default Productos;
