import { useEffect, useState } from "react";

function VerdaderoFalsoGame({
  tablaSeleccionada,
  registrarAcierto,
  registrarError,
}) {
  const [numeroPregunta, setNumeroPregunta] = useState(
    Math.floor(Math.random() * 10) + 1,
  );
  const [resultadoMostrado, setResultadoMostrado] = useState(0);
  const [esVerdadera, setEsVerdadera] = useState(() => Math.random() > 0.5);

  const [mensaje, setMensaje] = useState("");
  const [aciertos, setAciertos] = useState(0);
  const [errores, setErrores] = useState(0);

  function generarPregunta() {
    const nuevoNumero = Math.floor(Math.random() * 10) + 1;

    const nuevaEsVerdadera = Math.random() > 0.5;

    const nuevaRespuestaCorrecta = tablaSeleccionada * nuevoNumero;

    const nuevoResultado = nuevaEsVerdadera
      ? nuevaRespuestaCorrecta
      : nuevaRespuestaCorrecta + (Math.floor(Math.random() * 4) + 1);

    setNumeroPregunta(nuevoNumero);
    setEsVerdadera(nuevaEsVerdadera);
    setResultadoMostrado(nuevoResultado);
  }
  useEffect(() => {
    generarPregunta();
  }, [tablaSeleccionada]);

  function seleccionarRespuesta(respuestaUsuario) {
    if (respuestaUsuario === esVerdadera) {
      setMensaje("✅ ¡Correcto!");
      setAciertos((actual) => actual + 1);
      registrarAcierto();
    } else {
      setMensaje("❌ Incorrecto");
      setErrores((actual) => actual + 1);
      registrarError();
    }
    generarPregunta();
  }

  return (
    <div className="verdadero-falso">
      <h2>✅ Verdadero o Falso</h2>
      <p className="pregunta-verdadero-falso">
        {tablaSeleccionada} X {numeroPregunta} = {resultadoMostrado}
      </p>
      <div className="opciones-verdadero-falso">
        <button
          className="tarjeta-respuesta-verdadero"
          onClick={() => seleccionarRespuesta(true)}
        >
          Verdadero
        </button>
        <button
          className="tarjeta-respuesta-falso"
          onClick={() => seleccionarRespuesta(false)}
        >
          Falso
        </button>
      </div>
      <div className="marcador-caza">
        <p className="mensaje-caza">{mensaje}</p>
        <p>Aciertos: {aciertos}</p>
        <p>Errores: {errores}</p>
      </div>
    </div>
  );
}

export default VerdaderoFalsoGame;
