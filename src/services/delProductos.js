const URL = "http://localhost/icandy/API/deleteProducto.php";

const delProductos = async (producto) => {
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

export default delProductos;
