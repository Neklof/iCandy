import endpoints from "endpoints";
//const URL = "http://localhost/icandy/API/compra_carrito.php";

const realizarcompra = async (objecto) => {
  const response = await fetch(endpoints.compraCarrito, {
    method: "POST",
    body: JSON.stringify(objecto),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const repuestaJson = await response.json();
  //console.log(repuestaJson);
  return repuestaJson;
};
export default realizarcompra;
