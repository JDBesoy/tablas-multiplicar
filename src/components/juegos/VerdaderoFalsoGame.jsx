import { useState } from "react";

function VerdaderoFalsoGame({
  tablaSeleccionada,
  registrarAcierto,
  registrarError,
}) {
  function generarPregunta() {
    const numeroPregunta =
      Math.floor(Math.random() * 10) + 1;

    const esVerdadera =
      Math.random() > 0.5;

    const respuestaCorrecta =
      tablaSeleccionada * numeroPregunta;

    const resultadoMostrado =
      esVerdadera
        ? respuestaCorrecta
        : respuestaCorrecta +
          (Math.floor(Math.random() * 4) + 1);

    return {
      numeroPregunta,
      esVerdadera,
      resultadoMostrado,
    };
  }

  const [pregunta, setPregunta] = useState(
    () => generarPregunta()
  );

  const [mensaje, setMensaje] = useState("");
  const [aciertos, setAciertos] = useState(0);
  const [errores, setErrores] = useState(0);

  function seleccionarRespuesta(
    respuestaUsuario,
  ) {
    if (
      respuestaUsuario ===
      pregunta.esVerdadera
    ) {
      setMensaje("✅ ¡Correcto!");

      setAciertos(
        (actual) => actual + 1,
      );

      registrarAcierto(
        tablaSeleccionada,
      );
    } else {
      setMensaje("❌ Incorrecto");

      setErrores(
        (actual) => actual + 1,
      );

      registrarError(
        tablaSeleccionada,
      );
    }

    setPregunta(generarPregunta());
  }

  return (
    <div className="verdadero-falso">
      <h2>✅ Verdadero o Falso</h2>

      <p className="pregunta-verdadero-falso">
        {tablaSeleccionada} ×{" "}
        {pregunta.numeroPregunta} ={" "}
        {pregunta.resultadoMostrado}
      </p>

      <div className="opciones-verdadero-falso">
        <button
          className="tarjeta-respuesta-verdadero"
          onClick={() =>
            seleccionarRespuesta(true)
          }
        >
          Verdadero
        </button>

        <button
          className="tarjeta-respuesta-falso"
          onClick={() =>
            seleccionarRespuesta(false)
          }
        >
          Falso
        </button>
      </div>

      <div className="marcador-caza">
        <p className="mensaje-caza">
          {mensaje}
        </p>

        <p>Aciertos: {aciertos}</p>

        <p>Errores: {errores}</p>
      </div>
    </div>
  );
}

export default VerdaderoFalsoGame;