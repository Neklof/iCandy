const URL = "http://localhost/icandy/API/getPerfil.php";

const getUsuarios = async () => {
  const response = await fetch(URL, {
    method: "GET",
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
