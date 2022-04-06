const URL = "http://localhost/icandy/productos.php";
const TIPO = { Type: "Read" };

const getProductos = async () => {
  TIPO["User"] = "N/A";
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(TIPO),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const productosJSON = await response.json();

  //	console.log(productosJSON);

  return productosJSON;

  //   const misProductos = productosJSON.map((producto) => {
  //   	const { id, nombre, cantidad, precio } = producto;
  //   	return { id, nombre, cantidad, precio };
  //   });
  //   return misProductos;
};

export default getProductos;
