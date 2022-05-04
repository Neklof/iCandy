import endpoints from "endpoints";

const addCarrito = async (objecto) => {
  // console.log(JSON.stringify(objecto));
  const response = await fetch(endpoints.addCarrito, {
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
export default addCarrito;
