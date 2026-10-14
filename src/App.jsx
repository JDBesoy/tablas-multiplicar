import { useState } from "react";
import "./App.css";
import TablaMultiplicar from "./components/TablaMultiplicar";
import Encabezado from "./components/Encabezado";

import PreguntasGame from "./components/PreguntasGame";
import MenuJuegos from "./components/MenuJuegos";

function App() {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(2);
  const [numeroPregunta, setNumeroPregunta] = useState(5);
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const tablas = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [juegoActivo, setJuegoActivo] = useState("preguntas");

  return (
    <div className="app">
      <Encabezado />
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
        <p>Juego activo: {juegoActivo}</p>
        {juegoActivo === "preguntas" && (
          <>
            <PreguntasGame
              tablaSeleccionada={tablaSeleccionada}
              numeroPregunta={numeroPregunta}
              setNumeroPregunta={setNumeroPregunta}
            />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
