const URL = "http://localhost/icandy/API/addProductoCarrito.php";

const anadir_carrito = async (objecto, tipo) => {
  const TIPO = { Type: tipo };
  TIPO["Productos"] = objecto;
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(TIPO),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const repuestaJson = await response.json();
  //console.log(repuestaJson);
  return repuestaJson;
};
export default anadir_carrito;
