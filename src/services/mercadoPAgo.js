import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import mercaPventa from "./mercadoPventa";
const FORM_ID = "payment-form";

export default function Product({ datos }) {
  const { id } = useParams(); // id de producto
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId LO OBETENMOS CON LA COMUNICACION CON PHP
    mercaPventa(datos).then((response) => {
      setPreferenceId(response);
      if (!response) {
      }
    });
  }, []);

  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return (
    <form id={FORM_ID} method="POST" action="http://localhost:3000/"></form>
  );
}
