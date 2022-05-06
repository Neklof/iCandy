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
	addUsuario: `${process.env.REACT_APP_API_URL}API/addUsuarioAdmin.php`,
	getDetallesPedido: `${process.env.REACT_APP_API_URL}API/getDetallesPedido.php`,
	getHistorial: `${process.env.REACT_APP_API_URL}API/getHistorial.php`,
	getPedidos: `${process.env.REACT_APP_API_URL}API/getPedidos.php`,
	getProductoDetalles: `${process.env.REACT_APP_API_URL}API/getProductoDetalles.php`,
	getUsuarios: `${process.env.REACT_APP_API_URL}API/getUsuarios.php`,
	updatePedido: `${process.env.REACT_APP_API_URL}API/updatePedido.php`,
};

export default endpoints;
