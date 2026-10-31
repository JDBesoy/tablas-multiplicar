import { useState } from "react";

function CazaResultadoGame({
  tablaSeleccionada,
  registrarAcierto,
  registrarError,
}) {
  function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function mezclarOpciones(opciones) {
    const copia = [...opciones];

    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [copia[i], copia[j]] = [
        copia[j],
        copia[i],
      ];
    }

    return copia;
  }

  function generarPregunta(numero = obtenerNumeroAleatorio()) {
    const respuestaCorrecta =
      tablaSeleccionada * numero;

    const opciones = [
      respuestaCorrecta,
      respuestaCorrecta + 7,
      respuestaCorrecta - 2,
      respuestaCorrecta + 2,
    ];

    return {
      numeroPregunta: numero,
      respuestaCorrecta,
      opcionesMezcladas:
        mezclarOpciones(opciones),
    };
  }

  const [pregunta, setPregunta] =
    useState(() => generarPregunta());

  const [mensaje, setMensaje] = useState("");

  const [aciertos, setAciertos] =
    useState(0);

  const [errores, setErrores] =
    useState(0);

  function seleccionarRespuesta(opcion) {

    if (
      opcion === pregunta.respuestaCorrecta
    ) {
      setMensaje("✅ ¡Correcto!");

      setAciertos(
        (actual) => actual + 1
      );

      registrarAcierto(
        tablaSeleccionada
      );

    } else {

      setMensaje("❌ Incorrecto");

      setErrores(
        (actual) => actual + 1
      );

      registrarError(
        tablaSeleccionada
      );
    }

    setPregunta(
      generarPregunta()
    );
  }

  return (
    <div className="caza-resultado">
      <h2>🎯 Caza el Resultado</h2>

      <p className="pregunta-caza">
        ¿Cuánto es {tablaSeleccionada} ×{" "}
        {pregunta.numeroPregunta}?
      </p>

      <div className="opciones-caza">
        {pregunta.opcionesMezcladas.map(
          (opcion) => (
            <button
              className="tarjeta-respuesta"
              key={opcion}
              onClick={() =>
                seleccionarRespuesta(
                  opcion
                )
              }
            >
              {opcion}
            </button>
          )
        )}
      </div>

      <div className="marcador-caza">
        <p className="mensaje-caza">
          {mensaje}
        </p>

        <p>
          Aciertos: {aciertos}
        </p>

        <p>
          Errores: {errores}
        </p>
      </div>
    </div>
  );
}

export default CazaResultadoGame;