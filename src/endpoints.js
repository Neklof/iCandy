const endpoints = {
  addCarrito: `${process.env.REACT_APP_API_URL}icandy/API/insertarCarrito.php`,
  productos: `${process.env.REACT_APP_API_URL}icandy/API/consulta_productos.php`,
  cierreCaja: `${process.env.REACT_APP_API_URL}icandy/API/insertCierreCaja.php`,
  corteCaja: `${process.env.REACT_APP_API_URL}icandy/API/insertCorteCaja.php`,
  ventaCaja: `${process.env.REACT_APP_API_URL}icandy/API/compra_caja.php`,
  anadirCarrito: `${process.env.REACT_APP_API_URL}icandy/API/addProductoCarrito.php`,
  deletCarrito: `${process.env.REACT_APP_API_URL}icandy/API/deletProductoCarrito.php`,
  mercadopagoVenta: `${process.env.REACT_APP_API_URL}icandy/API/compra.php`,
  compraCarrito: `${process.env.REACT_APP_API_URL}icandy/API/compra_carrito.php`,
  actualizarFondo: `${process.env.REACT_APP_API_URL}icandy/API/updateFondo.php`,
  getCarrito: `${process.env.REACT_APP_API_URL}icandy/API/consultaCarrito.php`,
  getCorteCaja: `${process.env.REACT_APP_API_URL}icandy/API/getCorteCaja.php`,
  getMonto: `${process.env.REACT_APP_API_URL}icandy/API/getMonto.php`,
  addUsuario: `${process.env.REACT_APP_API_URL}icandy/API/addUsuarioAdmin.php`,
  getDetallesPedido: `${process.env.REACT_APP_API_URL}icandy/API/getDetallesPedido.php`,
  getHistorial: `${process.env.REACT_APP_API_URL}icandy/API/getHistorial.php`,
  getPedidos: `${process.env.REACT_APP_API_URL}icandy/API/getPedidos.php`,
  getProductoDetalles: `${process.env.REACT_APP_API_URL}icandy/API/getProductoDetalles.php`,
  getUsuarios: `${process.env.REACT_APP_API_URL}icandy/API/getUsuarios.php`,
  updatePedido: `${process.env.REACT_APP_API_URL}icandy/API/updatePedido.php`,
  addProducto: `${process.env.REACT_APP_API_URL}icandy/API/insertarProducto.php`,
  addSurtirProductos: `${process.env.REACT_APP_API_URL}icandy/API/surtir_producto.php`,
  addUserRegistrar: `${process.env.REACT_APP_API_URL}icandy/API/registrar_usuario_cliente.php`,
  delProductos: `${process.env.REACT_APP_API_URL}icandy/API/deleteProducto.php`,
  getPerfilUsuario: `${process.env.REACT_APP_API_URL}icandy/API/getPerfilUsuario.php`,
  getProductos: `${process.env.REACT_APP_API_URL}icandy/API/productos.php`,
  addLogin: `${process.env.REACT_APP_API_URL}icandy/API/login_SSO.php`,
  getProductosInventario: `${process.env.REACT_APP_API_URL}icandy/API/productos.php`,
  registrarUsuarioCliente: `${process.env.REACT_APP_API_URL}icandy/API/registrar_usuario_cliente.php`,
  recuperarContrasenaCliente: `${process.env.REACT_APP_API_URL}icandy/API/recuperar_contrasena_cliente.php`,
  deleteProducto: `${process.env.REACT_APP_API_URL}icandy/API/deleteProducto.php`,
  surtirProducto: `${process.env.REACT_APP_API_URL}icandy/API/surtir_producto.php`,
  updatePerfilCliente: `${process.env.REACT_APP_API_URL}icandy/API/updatePerfilCliente.php`,
  updateClientePassword: `${process.env.REACT_APP_API_URL}icandy/API/updateClientePassword.php`,
  updateProductos: `${process.env.REACT_APP_API_URL}icandy/API/updateProductos.php`,

  mercadoPago: `${process.env.REACT_APP_API_MERCADOPAGO}/carrito`,
  obtenerCliente: `${process.env.REACT_APP_API_URL}icandy/API/getCliente.php`,
};

export default endpoints;
