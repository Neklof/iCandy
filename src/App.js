import "App.css";
import Administrador from "pages/Administrador";
import Cliente from "pages/Cliente";
import endpoints from "endpoints";
import Login from "pages/Cliente/Login/Login";
import Registrarme from "pages/Cliente/Login/Registrarme";
import Recuperar from "pages/Cliente/RecuperarContra/Recuperar";
import Confirmar from "pages/Cliente/RecuperarContra/Confirmar";
import React, { useState } from "react";

function App() {
  const [session, setSession] = useState({});

  const admin = false;

  return (
    <div className={`${admin ? "App_Admin" : "App_Cliente"}`}>
      {admin ? (
        <Administrador session={session} setSession={setSession} />
      ) : (
        <Cliente session={session} setSession={setSession} />
      )}
    </div>
  );
}

export default App;
