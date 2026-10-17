import { useState } from "react";
import Marcador from "../preguntas/Marcador";
import Pregunta from "../preguntas/Pregunta";
import Respuesta from "../preguntas/Respuesta";

function PreguntasGame({
  tablaSeleccionada,
  numeroPregunta,
  setNumeroPregunta,
  registrarAcierto,
  registrarError,
}) {
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [comprobacion, setComprobacion] = useState("");
  const [aciertos, setAciertos] = useState(0);
  const [errores, setErrores] = useState(0);
  function comprobarRespuesta() {
    const respuestaCorrecta = tablaSeleccionada * numeroPregunta;
    if (respuestaUsuario.trim() === "") {
      setComprobacion("Por favor, ingresa una respuesta.");
      return;
    }
    if (Number(respuestaUsuario) === respuestaCorrecta) {
      setComprobacion("¡Correcto!");
      setAciertos((actual) => actual + 1);
      registrarAcierto();
    } else {
      setComprobacion(
        `Incorrecto. La respuesta correcta es ${respuestaCorrecta}`,
      );
      setErrores((actual) => actual + 1);
      registrarError();
    }
    // Genera un nuevo número aleatorio entre 1 y 10
    setNumeroPregunta(Math.floor(Math.random() * 10) + 1);
    // Limpia la respuesta del usuario
    setRespuestaUsuario("");
  }

  return (
    <>
      <Pregunta tabla={tablaSeleccionada} numeroPregunta={numeroPregunta} />
      <Respuesta
        respuestaUsuario={respuestaUsuario}
        setRespuestaUsuario={setRespuestaUsuario}
        comprobarRespuesta={comprobarRespuesta}
        comprobacion={comprobacion}
      />
      <div className="marcador-caza">
        <p>Aciertos: {aciertos}</p>
        <p>Errores: {errores}</p>
      </div>
    </>
  );
}

export default PreguntasGame;
