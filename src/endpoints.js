const endpoints = {
  addCarrito: `${process.env.REACT_APP_API_URL}API/insertarCarrito.php`,
  productos: `${process.env.REACT_APP_API_URL}API/consulta_productos.php`,
  cierreCaja: `${process.env.REACT_APP_API_URL}API/insertCierreCaja.php`,
  corteCaja: `${process.env.REACT_APP_API_URL}API/insertCorteCaja.php`,
  ventaCaja: `${process.env.REACT_APP_API_URL}API/compra_caja.php`,
  anadirCarrito: `${process.env.REACT_APP_API_URL}API/addProductoCarrito.php`,
  deletCarrito: `${process.env.REACT_APP_API_URL}API/deletProductoCarrito.php`,
  mercadopagoVenta: `${process.env.REACT_APP_API_URL}API/compra.php`,
  compraCarrito: `${process.env.REACT_APP_API_URL}API/compra_carrito.php`,
  actualizarFondo: `${process.env.REACT_APP_API_URL}API/updateFondo.php`,
  getCarrito: `${process.env.REACT_APP_API_URL}API/consultaCarrito.php`,
  getCorteCaja: `${process.env.REACT_APP_API_URL}API/getCorteCaja.php`,
  getMonto: `${process.env.REACT_APP_API_URL}API/getMonto.php`,
  addProducto: `${process.env.REACT_APP_API_URL}API/insertarProducto.php`,
  addLogin: `${process.env.REACT_APP_API_URL}API/login_SSO.php`,
  getProductosInventario: `${process.env.REACT_APP_API_URL}API/productos.php`,
  registrarUsuarioCliente: `${process.env.REACT_APP_API_URL}API/registrar_usuario_cliente.php`,
  recuperarContrasenaCliente: `${process.env.REACT_APP_API_URL}API/recuperar_contrasena_cliente.php`,
  deleteProducto: `${process.env.REACT_APP_API_URL}API/deleteProducto.php`,
  surtirProducto: `${process.env.REACT_APP_API_URL}API/surtir_producto.php`,
};

export default endpoints;
