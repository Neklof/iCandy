const URL = "http://localhost/icandy/API/compra.php";

const mercaPventa = async (objecto) => {
  // console.log(objecto);
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(objecto),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const repuestaJson = await response.json();
  //console.log(repuestaJson);
  return repuestaJson;
};
export default mercaPventa;
