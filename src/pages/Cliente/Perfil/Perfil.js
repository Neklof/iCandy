import "./perfilStyles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Perfil = ({ userData }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState();
  const [direccion, setDireccion] = useState("");
  const [colonia, setColonia] = useState("");
  const [cp, setCp] = useState();

  console.log("la data" + userData.id_C);

  async function getPerfil() {
    // e.preventDefault();
    let fd_login = new FormData();

    alert(userData.id_C);
    fd_login.append("id_C", userData.id_C);

    // Funciona (en este no se usa el addUserRegistrar.js)
    const res = await axios.post(
      "http://localhost/icandy/API/getPerfilUsuario.php",
      fd_login
    );

    alert(res.data);
    if (res.data != null) {
      alert(res.data);
      setNombre(res.data.nombre_C);
      setApellido(res.data.apellidos_C);
      setCorreo(res.data.correo_C);
      setTelefono(res.data.telefono_C);
      setDireccion(res.data.direccion_C);
      setColonia(res.data.colonia_C);
      setCp(res.data.cp_C);

      alert("here");
    } else {
      alert("Errorsito");
    }
  }
  // alert(res.data.nombre_C);
  // setNombre(res.data.nombre_C);
  // setApellido(res.data.apellido_C);
  // alert(res.data.apellido_C);

  useEffect(() => {
    getPerfil();
  }, []);

  return (
    <div className="contenedor-perfil">
      {/* <h3>Mi Perfil</h3> */}
      <h2></h2>
      <div className="div-contenedor-perfil">
        <div className="div-form-perfil">
          {" "}
          <h2>Mi perfil</h2>
          <form encType="multipart/form-data" method="POST">
            <div className="txt_dato_div">
              <input
                type="text"
                required
                /* Prueba */
                className="nombre"
                name="nombre"
                defaultValue={nombre}
              />
              <span></span>
              <label>Nombre(s):</label>
            </div>
            <div className="txt_dato_div">
              <input type="text" defaultValue={apellido} required />
              <span></span>
              <label>Apelldio(s):</label>
            </div>
            <div className="txt_dato_div">
              <input type="text" defaultValue={correo} required />
              <span></span>
              <label>Email:</label>
            </div>
            <div className="txt_dato_div">
              <input type="text" defaultValue={telefono} required />
              <span></span>
              <label>Telefono:</label>
            </div>
            <div className="txt_dato_div caca">
              <input type="text" defaultValue={direccion} required />
              <span></span>
              <label>Calle:</label>
            </div>
            <div className="txt_dato_div">
              <input type="text" defaultValue={colonia} required />
              <span></span>
              <label>Colonia:</label>
            </div>
            <div className="txt_dato_div">
              <input type="text" defaultValue={cp} required />
              <span></span>
              <label>CP:</label>
            </div>

            <button
              className="btn-act-perfil"
              type="submit"
              // onClick={(e) => getPerfil(e)}
            >
              Guardar
            </button>
          </form>
          <form>
            <br></br>
            <br></br>
            <h2>Cambio de contraseña</h2>
            <div className="txt_dato_div">
              <input type="password" required />
              <span></span>
              <label>Contraseña</label>
            </div>
            <div className="txt_dato_div">
              <input type="password" required />
              <span></span>
              <label>Confirmar contraseña:</label>
            </div>
            <div className="txt_dato_div_otro"></div>
            <button className="btn-act-perfil" type="submit">
              Cambiar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
