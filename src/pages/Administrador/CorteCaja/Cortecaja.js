import "./styles.css";
import { useEffect, useState, useRef } from "react";
import swal from "sweetalert";
var hoy = new Date();
var fecha =
  hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
const Cortecaja = () => {
  const fondo = useRef();
  const sendFondo = () => {
    swal({
      title: "Fondo",
      text: `Esta seguro de registrar ${"$" + fondo.current.value}`,
      icon: "warning",
      buttons: ["No", "Sí"],
      dangerMode: true,
    }).then((respuesta) => {
      if (respuesta) {
        swal("¡Corte de caja realizado con exito!", {
          icon: "success",
        });
      }
    });
  };

  const sendCierre = () => {
    swal({
      title: "Corte de caja",
      text: "Esta seguro de realizar corte de caja",
      icon: "warning",
      buttons: ["No", "Sí"],
      dangerMode: true,
    }).then((respuesta) => {
      if (respuesta) {
        swal("¡Corte de caja realizado con exito!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="corteCaja-contenedor">
      <div className="corteCaja-opciones">
        <div className="corteCaja-opciones__fecha">
          <p>Fecha:{" " + fecha}</p>
        </div>
        <div className="corteCaja-opciones__Inputs">
          <div className="Input_1">
            <p>Fondo Caja</p>
            <input type="text" placeholder="Fondo Caja" ref={fondo} />
            <button onClick={sendFondo}>Registrar Fondo</button>
          </div>
          <div className="Input_2">
            <p>Corte Caja</p>
            <input type="text" placeholder="Corte Caja" />
            <button>Registrar Corte</button>
          </div>
        </div>
      </div>
      <div className="corteCaja-contenedorTabla">
        <table className="Corte-tabla">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admin</td>
              <td>$5000</td>
              <td>12/05/22</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>$5000</td>
              <td>12/05/22</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>$5000</td>
              <td>12/05/22</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>$5000</td>
              <td>12/05/22</td>
              <td>14:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Corte-tabla-cierreCaja">
        <button onClick={sendCierre}>Cierrre de caja</button>
      </div>
    </div>
  );
};

export default Cortecaja;
