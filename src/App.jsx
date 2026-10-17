import { useState } from "react";
import "./App.css";
import PantallaInicio from "./components/PantallaInicio";
import Encabezado from "./components/layout/Encabezado";
import SidebarJugador from "./components/layout/SidebarJugador";
import MenuJuegos from "./components/layout/MenuJuegos";
import TablaMultiplicar from "./components/comunes/TablaMultiplicar";
import FooterEstadisticas from "./components/layout/FooterEstadisticas";

import PreguntasGame from "./components/juegos/PreguntasGame";
import CazaResultadoGame from "./components/juegos/CazaResultadoGame";
import VerdaderoFalsoGame from "./components/juegos/VerdaderoFalsoGame";

function App() {
  const [jugadorActivo, setJugadorActivo] = useState("");
  const [estadisticasSesion, setEstadisticasSesion] = useState({
    aciertosHoy: 0,
    erroresHoy: 0,
    rachaActual: 0,
    mejorRacha: 0,
    aciertosTotales: 0,
  });
  const [tablaSeleccionada, setTablaSeleccionada] = useState(2);
  const [numeroPregunta, setNumeroPregunta] = useState(
    () => Math.floor(Math.random() * 10) + 1,
  );
  const tablas = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [juegoActivo, setJuegoActivo] = useState("preguntas");

  if (!jugadorActivo) {
    return <PantallaInicio iniciarJuego={setJugadorActivo} />;
  }
   
  function registrarAcierto() {
    setEstadisticasSesion((actual) => {
      const nuevaRacha = actual.rachaActual + 1;

      return {
        ...actual,

        aciertosHoy: actual.aciertosHoy + 1,
        aciertosTotales: actual.aciertosTotales + 1,

        rachaActual: nuevaRacha,

        mejorRacha: Math.max(actual.mejorRacha, nuevaRacha),
      };
    });
  }
  function registrarError() {
    setEstadisticasSesion((actual) => ({
      ...actual,

      erroresHoy: actual.erroresHoy + 1,

      rachaActual: 0,
    }));
  }
  return (
    <div className="app">
      <Encabezado
        jugadorActivo={jugadorActivo}
        setJugadorActivo={setJugadorActivo}
      />
      <MenuJuegos juegoActivo={juegoActivo} setJuegoActivo={setJuegoActivo} />
      <div className="layout-principal">
        <SidebarJugador
          jugadorActivo={jugadorActivo}
          tablas={tablas}
          tablaSeleccionada={tablaSeleccionada}
          setTablaSeleccionada={setTablaSeleccionada}
          setJugadorActivo={setJugadorActivo}
          mejorRacha={estadisticasSesion.mejorRacha}
        />
        <section className="contenedor-principal">
          <h2 className="titulo-juego">
            {juegoActivo === "preguntas" && "🧠 Preguntas"}

            {juegoActivo === "caza" && "🎯 Caza el Resultado"}

            {juegoActivo === "verdadero-falso" && "✅ Verdadero o Falso"}
          </h2>
          {juegoActivo === "preguntas" && (
            <>
              <PreguntasGame
                tablaSeleccionada={tablaSeleccionada}
                numeroPregunta={numeroPregunta}
                setNumeroPregunta={setNumeroPregunta}
                registrarAcierto={registrarAcierto}
                registrarError={registrarError}
              />
            </>
          )}
          {juegoActivo === "caza" && (
            <>
              <CazaResultadoGame
                tablaSeleccionada={tablaSeleccionada}
                registrarAcierto={registrarAcierto}
                registrarError={registrarError}
              />
            </>
          )}
          {juegoActivo === "verdadero-falso" && (
            <>
              <VerdaderoFalsoGame
                tablaSeleccionada={tablaSeleccionada}
                registrarAcierto={registrarAcierto}
                registrarError={registrarError}
              />
            </>
          )}
        </section>
        <aside className="sidebar-tabla">
          <TablaMultiplicar
            tabla={tablaSeleccionada}
            numeroPregunta={numeroPregunta}
          />
        </aside>
      </div>
      <FooterEstadisticas
        aciertosHoy={estadisticasSesion.aciertosHoy}
        erroresHoy={estadisticasSesion.erroresHoy}
        rachaActual={estadisticasSesion.rachaActual}
        aciertosTotales={estadisticasSesion.aciertosTotales}
      />
    </div>
  );
}

export default App;
