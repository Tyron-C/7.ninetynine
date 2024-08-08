import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contacto</h1>
      <p className="mb-4">
        Para cualquier consulta o información adicional, no dudes en ponerte en
        contacto con nosotros. Aquí está nuestra información de contacto:
      </p>
      <ul className="space-y-4">
        <li>
          <strong>Correo Electrónico:</strong>{" "}
          <a
            href="mailto:info@yourbusiness.com"
            className="text-blue-600 hover:underline"
          >
            info@yourbusiness.com
          </a>
        </li>
        <li>
          <strong>Teléfono:</strong> +1 (234) 567-8900
        </li>
        <li>
          <strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País
        </li>
      </ul>
    </div>
  );
};

export default Contact;
