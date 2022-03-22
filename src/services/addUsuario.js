const URL = "http://localhost/icandy/API/addUsuarioAdmin.php";

const addUsuario = async (user) => {
	const response = await fetch(URL, {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const responseJSON = await response.json();

	return responseJSON.success || responseJSON.error;
};

export default addUsuario;
