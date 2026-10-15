import { useState } from "react";
import Marcador from "../preguntas/Marcador"
import Pregunta from "../preguntas/Pregunta";
import Respuesta from "../preguntas/Respuesta";

function PreguntasGame({
  tablaSeleccionada,
  numeroPregunta,
  setNumeroPregunta,
}) {
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [comprobacion, setComprobacion] = useState("");
  const [aciertos, setAciertos] = useState(0);
  const [errores, setErrores] = useState(0);
  const puntuacion = aciertos;
  function comprobarRespuesta() {
    const respuestaCorrecta = tablaSeleccionada * numeroPregunta;
    if (respuestaUsuario.trim() === "") {
      setComprobacion("Por favor, ingresa una respuesta.");
      return;
    }
    if (Number(respuestaUsuario) === respuestaCorrecta) {
      setComprobacion("¡Correcto!");
      setAciertos(aciertos + 1);
    } else {
      setComprobacion(
        `Incorrecto. La respuesta correcta es ${respuestaCorrecta}`,
      );
      setErrores(errores + 1);
    }
    // Genera un nuevo número aleatorio entre 1 y 10
    setNumeroPregunta(Math.floor(Math.random() * 10) + 1);
    // Limpia la respuesta del usuario
    setRespuestaUsuario("");
  }

  function reiniciarMarcador() {
    setAciertos(0);
    setErrores(0);
    setComprobacion("");
    setRespuestaUsuario("");
    setNumeroPregunta(Math.floor(Math.random() * 10) + 1);
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
      <Marcador puntuacion={puntuacion} aciertos={aciertos} errores={errores} />
      <button className="btn-reiniciar" onClick={reiniciarMarcador}>
        🔄 Reiniciar marcador
      </button>
    </>
  );
}

export default PreguntasGame;
