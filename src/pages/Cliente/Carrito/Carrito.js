import "./styles.css";

const Carrito = () => {
  return (
    <div className="container-principal">
      <div className="container-carrito">
        <div className="container-carrito__titulo">
          <h3>Carrito (2)</h3>
        </div>
        <div className="container-carrito__productos">
          <div className="container-carrito__producto"></div>
        </div>
        <div className="container-carrito__direccion"></div>
      </div>
    </div>
  );
};

export default Carrito;
