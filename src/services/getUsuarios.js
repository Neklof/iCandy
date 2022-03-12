const URL = "http://localhost/icandy/usuarios.php";
const TIPO = { Type: "Read" };

const getUsuarios = async () => {
	TIPO["User"] = "N/A";

	const response = await fetch(URL, {
		method: "POST",
		body: JSON.stringify(TIPO),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const usuariosJSON = await response.json();

	const usuarios = usuariosJSON.map((usuario) => {
		const { id, nombre, correo, direccion, telefono, tipo } = usuario;
		return { id, nombre, tipo, telefono, correo, direccion };
	});
	return usuarios;
};

export default getUsuarios;
