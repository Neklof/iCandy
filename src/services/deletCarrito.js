const URL = "http://localhost/icandy/API/deletProductoCarrito.php";

const deletCarrito = async (objecto) => {
  // console.log(JSON.stringify(objecto));
  const response = await fetch(URL, {
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
export default deletCarrito;
