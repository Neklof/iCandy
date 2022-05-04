// const URL = "http://localhost/icandy/API/consultaCarrito.php";
import endpoints from "endpoints";
const getCarrito = async (objecto) => {
  const response = await fetch(endpoints.getCarrito, {
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
export default getCarrito;
