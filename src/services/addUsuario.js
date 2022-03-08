const URL = "http://localhost/icandy/usuarios.php";
const TIPO = { Type: "Create" };

const addUsuario = async () => {
	const response = await fetch(URL, {
		method: "POST",
		body: JSON.stringify(TIPO),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const responseJSON = await response.json();

	return responseJSON;
};

export default addUsuario;
