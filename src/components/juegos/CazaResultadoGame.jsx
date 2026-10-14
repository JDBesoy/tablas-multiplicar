import { useState } from "react";

function CazaResultadoGame({ tablaSeleccionada }) {
  const [numeroPregunta, setNumeroPregunta] = useState(
    () => Math.floor(Math.random() * 10) + 1,
  );
  const [mensaje, setMensaje] = useState("");
  const [aciertos, setAciertos] = useState(0);
  const [errores, setErrores] = useState(0);
  const respuestaCorrecta = tablaSeleccionada * numeroPregunta;
  const opciones = [
    respuestaCorrecta,
    respuestaCorrecta + 7,
    respuestaCorrecta - 2,
    respuestaCorrecta + 2,
  ];
  const opcionesMezcladas = [...opciones];
  opcionesMezcladas.sort(() => Math.random() - 0.5);

  function seleccionarRespuesta(opcion) {
    const nuevoNumero = () => Math.floor(Math.random() * 10) + 1;
    if (opcion === respuestaCorrecta) {
      setMensaje("✅ ¡Correcto!");
      setAciertos(aciertos + 1);
    } else {
      setMensaje("❌ Incorrecto");
      setErrores(errores + 1);
    }
    setNumeroPregunta(nuevoNumero);
  }

  return (
    <div className="caza-resultado">
      <h2>🎯 Caza el Resultado</h2>

      <p className="pregunta-caza">
        ¿Cuánto es {tablaSeleccionada} × {numeroPregunta}?
      </p>
      <p>Respuesta correcta: {respuestaCorrecta}</p>
      <div className="opciones-caza">
        {opcionesMezcladas.map((opcion) => (
          <button
            className="tarjeta-respuesta"
            key={opcion}
            onClick={() => seleccionarRespuesta(opcion)}
          >
            {opcion}
          </button>
        ))}
        <div className="marcador-caza">
          <p className="mensaje-caza">{mensaje}</p>

          <p>Aciertos: {aciertos}</p>

          <p>Errores: {errores}</p>
        </div>
      </div>
    </div>
  );
}

export default CazaResultadoGame;
