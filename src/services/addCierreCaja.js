import endpoints from "endpoints";
const addCierreCaja = async (objecto) => {
  console.log(JSON.stringify(objecto));
  const response = await fetch(endpoints.cierreCaja, {
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
export default addCierreCaja;
