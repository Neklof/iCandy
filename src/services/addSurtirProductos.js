const URL = "http://localhost/icandy/API/surtir_producto.php";

const addSurtirProductos = async (data) => {
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseJson = await response.json();
  return responseJson;
};
export default addSurtirProductos;
