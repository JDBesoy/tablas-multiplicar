import { useState } from "react";
import "./App.css";
import PantallaInicio from "./components/PantallaInicio";
import Encabezado from "./components/layout/Encabezado";
import MenuJuegos from "./components/layout/MenuJuegos";
import TablaMultiplicar from "./components/comunes/TablaMultiplicar";

import PreguntasGame from "./components/juegos/PreguntasGame";
import CazaResultadoGame from "./components/juegos/CazaResultadoGame";
import VerdaderoFalsoGame from "./components/juegos/VerdaderoFalsoGame";

function App() {
  const [jugadorActivo, setJugadorActivo] = useState(
    localStorage.getItem("jugadorActivo") || "",
  );
  const [tablaSeleccionada, setTablaSeleccionada] = useState(2);
  const [numeroPregunta, setNumeroPregunta] = useState(
    () => Math.floor(Math.random() * 10) + 1,
  );
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const tablas = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [juegoActivo, setJuegoActivo] = useState("preguntas");

  if (!jugadorActivo) {
    return <PantallaInicio iniciarJuego={setJugadorActivo} />;
  }
  return (
    <div className="app">
      <Encabezado jugadorActivo={jugadorActivo} setJugadorActivo={setJugadorActivo} />
      <div className="selector-tablas">
        <p>📚 Selecciona una tabla: </p>
        {tablas.map((tabla) => (
          <button
            key={tabla}
            className={
              tablaSeleccionada === tabla
                ? "btn-tabla btn-tabla-activa"
                : "btn-tabla"
            }
            onClick={() => setTablaSeleccionada(tabla)}
          >
            {tabla}
          </button>
        ))}
      </div>

      <MenuJuegos juegoActivo={juegoActivo} setJuegoActivo={setJuegoActivo} />
      <section className="contenedor-principal">
        {juegoActivo === "preguntas" && (
          <>
            <button
              className="btn-ocultar-tabla"
              onClick={() => setMostrarTabla(!mostrarTabla)}
            >
              {mostrarTabla ? "Ocultar tabla" : "Mostrar tabla"}
            </button>
            {mostrarTabla && (
              <TablaMultiplicar
                tabla={tablaSeleccionada}
                numeroPregunta={numeroPregunta}
              />
            )}
            <PreguntasGame
              tablaSeleccionada={tablaSeleccionada}
              numeroPregunta={numeroPregunta}
              setNumeroPregunta={setNumeroPregunta}
            />
          </>
        )}
        {juegoActivo === "caza" && (
          <>
            <CazaResultadoGame tablaSeleccionada={tablaSeleccionada} />
          </>
        )}
        {juegoActivo === "verdadero-falso" && (
          <>
            <VerdaderoFalsoGame tablaSeleccionada={tablaSeleccionada} />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
