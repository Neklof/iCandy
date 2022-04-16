const URL = "http://localhost/icandy/API/updateFondo.php";

const updateFondo = async (objecto) => {
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

export default updateFondo;
