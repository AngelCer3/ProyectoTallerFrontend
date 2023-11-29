import { useState } from "react";

export const useForm = (estadoInicial: any) => {
    const [form, setform] = useState(estadoInicial);
      const { nombres, apellidos, direccion, email, whatsapp, telefono } = form;
      const handleInputChange = (evento: any) => {
        setform({
          ...form,
          [evento.target.id]: evento.target.value,
        });
      };
    return[form, handleInputChange]
}