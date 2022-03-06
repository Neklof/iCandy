const URL = "http://localhost/icandy/usuarios.php";

const getUsuarios = async () => {
	const response = await fetch(URL, {
		method: "POST",
		//body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const usuariosJSON = await response.json();

	const usuarios = usuariosJSON.map((usuario) => {
		const { id, nombre, correo, direccion, telefono, tipo } = usuario;
		return { id, nombre, correo, direccion, telefono, tipo };
	});
	return usuarios;
};

export default getUsuarios;
