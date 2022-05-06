const URL = "http://localhost/icandy/API/getProductoDetalles.php";

const getProductoDetalles = async (producto, id_c) => {
  const productoJSON = { id: producto };
  productoJSON.id_c = id_c;
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(productoJSON),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseJSON = await response.json();

  return responseJSON;
};

export default getProductoDetalles;
