const URL = "http://localhost/icandy/compra_caja.php";

const addVentaCaja = async (objecto) => {
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(objecto),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const repuestaJson = await response.json();
  return repuestaJson;
};
export default addVentaCaja;
