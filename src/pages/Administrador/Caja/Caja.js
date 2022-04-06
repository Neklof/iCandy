import "./styles.css";
import Tabla from "components/TablaCaja/TablaCaja";
import imagenes from "assets/Img/nugs.png";
import { useEffect, useState, useRef } from "react";
import getProductos from "services/getProductos";
import { ToastContainer, toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Caja = () => {
  const alerta = (mensaje) => {
    toast.error(mensaje, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  };

  var objecto = {};

  //donde lamacenamos los productosd
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  /***** *********obtener datos de objecto************ */
  //cantidad_PR
  const [disponibles, setDisponibles] = useState(0);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [foto, setFoto] = useState("");
  //arreglo de tabla
  const [unidades, setUnidades] = useState(0);
  const [find, setFind] = useState({});
  const [prueba, SetPrueba] = useState(0);
  //refs
  const idProducto = useRef();
  //variables globales
  var total = unidades * precio;

  useEffect(() => {
    getProductos().then((response) => {
      setProductos(response);
      if (!response) {
        alerta("Error en base de datos");
      }
    });
    //console.log("useEffect");
  }, [prueba]);

  const renderizar = () => {
    if (prueba == 0) {
      SetPrueba(1);
    } else if (prueba == 1) {
      SetPrueba(0);
    }
    setCarrito([]);
    formatearValores();
  };
  //guardar datos de producto para agregar a la compra
  const handleAgregarProducto = () => {
    if (unidades > 0) {
      objecto = find;
      objecto.unidades = unidades;
      objecto.total = total;
      //hacer tipo push a un arreglo con uses satet
      setCarrito([...carrito, objecto]);
    } else {
      alerta("Debes agregar la cantidad!!!!");
    }
  };
  //console.log(carrito);
  const handleAumentar = () => {
    if (disponibles > 0) {
      setUnidades(unidades + 1);
      setDisponibles(disponibles - 1);
    }
  };

  const handleQuitar = () => {
    if (unidades > 0) {
      setUnidades(unidades - 1);
      setDisponibles(disponibles + 1);
    }
  };
  const formatearValores = () => {
    setDisponibles(0);
    setNombre("");
    setPrecio("");
    setUnidades(0);
  };
  const handleBuscador = () => {
    setUnidades(0);
    const find = productos.find(
      (producto) => producto.id_PR === idProducto.current.value
    );
    setFind(find);
    if (find) {
      setDisponibles(find.cantidad_PR);
      setNombre(find.nombre_PR);
      setPrecio(find.precio_PR);
      setFoto(find.foto_PR);
    } else {
      formatearValores();
    }
  };
  const cancelarCompra = () => {
    setCarrito([]);
    formatearValores();
  };
  return (
    <div className="contendor_Caja">
      <div className="contenedor_Buscador_Caja">
        <h3>Datos Cliente</h3>

        <input type="text" className="inputs_caja" placeholder="Codigo" />
        <input
          type="text"
          className="inputs_caja"
          placeholder="Nombre Cliente"
        />
        <h3>Datos productos</h3>
        <input
          type="text"
          className="inputs_caja"
          placeholder="Codigo"
          onChange={handleBuscador}
          ref={idProducto}
        />
        <input
          type="text"
          className="inputs_caja"
          placeholder="Producto"
          value={nombre}
          disabled="disabled"
        />

        <div className="contendorAumentar">
          <img src={foto} alt="Imagenes de productos" className="Imagenes" />
          <button className="diseñoBotonIncremento" onClick={handleAumentar}>
            +
          </button>
          <p className="diseñoP">{unidades}</p>
          <button className="diseñoBotonIncremento" onClick={handleQuitar}>
            -
          </button>
          <p className="cantidadCaja">{disponibles} Disponibles</p>
        </div>

        <input
          type="text"
          name=""
          id=""
          placeholder="Precio Unitario"
          className="inputs_caja"
          value={" $ " + precio}
          disabled="disabled"
        />
        <input
          type="text"
          value={total}
          placeholder="Total Producto"
          className="inputs_caja"
          disabled="disabled"
        />
        <button className="botonAgregar" onClick={handleAgregarProducto}>
          Agregar Producto
        </button>
      </div>
      <div className="contendorTablaCaja">
        <Tabla arreglo={carrito} compra={cancelarCompra} rend={renderizar} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Caja;
