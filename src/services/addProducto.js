const URL = "http://localhost/icandy/productos.php";
const TIPO = { Type: "Create" };

const addProducto = async (producto) => {
	TIPO["User"] = producto;

	const response = await fetch(URL, {
		method: "POST",
		body: JSON.stringify(TIPO),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const responseJSON = await response.json();

	return responseJSON.success || responseJSON.error;
};

export default addProducto;