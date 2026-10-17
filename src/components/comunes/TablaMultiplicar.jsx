import { useState } from "react";
function TablaMultiplicar({ tabla, numeroPregunta }) {
  const numeros = Array.from({ length: 10 }, (_, i) => i + 1);
  const [mostrarTabla, setMostrarTabla] = useState(true);

 return (
  <div className="tabla-multiplicar">

    <button
      className="btn-ocultar-tabla"
      onClick={() => setMostrarTabla(!mostrarTabla)}
    >
      {mostrarTabla
        ? "Ocultar tabla"
        : "Mostrar tabla"}
    </button>

    {mostrarTabla && (
      <>
        <h2 className="tabla-titulo">
          Tabla del {tabla}
        </h2>

        {numeros.map((numero) => (
          <p
            key={numero}
            className={
              numero === numeroPregunta
                ? "operacion operacion-activa"
                : "operacion"
            }
          >
            {tabla} × {numero} = {tabla * numero}
          </p>
        ))}
      </>
    )}

  </div>
);
}

export default TablaMultiplicar;
