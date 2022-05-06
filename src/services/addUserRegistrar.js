const URL = "http://localhost/icandy/API/registrar_usuario_cliente.php";

const addUserRegistrar = async (data) => {
  const response = await fetch(URL, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseJson = await response.json();
  return responseJson;
};
export default addUserRegistrar;
