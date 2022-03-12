const URL = "http://localhost/icandy/usuarios.php";
const TIPO = { Type: "Create" };

const addUsuario = async (user) => {
	TIPO["User"] = user;

	const response = await fetch(URL, {
		method: "POST",
		body: JSON.stringify(TIPO),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const responseJSON = await response.json();

	return responseJSON.success || responseJSON.error;
};

export default addUsuario;
