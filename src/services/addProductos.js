const URL = "http://localhost/icandy/API/insertarProducto.php";

const addProductos = async (producto) => {
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(producto),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseJSON = await response.json();

  return responseJSON;
};

export default addProductos;
