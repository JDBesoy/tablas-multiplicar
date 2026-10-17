import { useState } from "react";

function PantallaInicio({ iniciarJuego }) {
  const [nombre, setNombre] = useState("");
  const [jugadores, setJugadores] = useState(
    JSON.parse(localStorage.getItem("jugadores")) || {},
  );

  function crearJugador(nombre) {
    const nuevosJugadores = {
      ...jugadores,
    };

    if (!nuevosJugadores[nombre]) {
      nuevosJugadores[nombre] = {
        estadisticasHoy: {
          fecha: "0000-00-00",
          aciertos: 0,
          errores: 0,
        },
        aciertosTotales: 0,
        erroresTotales: 0,

        rachaActual: 0,
        mejorRacha: 0,

        tablas: {},
        logros: {},
      };
    }

    localStorage.setItem("jugadores", JSON.stringify(nuevosJugadores));

    setJugadores(nuevosJugadores);

    localStorage.setItem("jugadorActivo", nombre);
  }
  function guardarJugador() {
    if (!nombre.trim()) return;

    crearJugador(nombre);

    iniciarJuego(nombre);
  }
  function seleccionarJugador(nombre) {
    localStorage.setItem("jugadorActivo", nombre);

    iniciarJuego(nombre);
  }

  return (
    <div className="pantalla-inicio">
      <div className="tarjeta-inicio">
        <h1>🧮 Tablas de Multiplicar</h1>

        <p>Quién va a jugar?</p>
        {Object.keys(jugadores).map((nombre) => (
          <button
            className="btn-nombres"
            key={nombre}
            onClick={() => seleccionarJugador(nombre)}
          >
            {nombre}
          </button>
        ))}

        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <button className="btn-crear-jugador" onClick={guardarJugador}>
          Crear Jugador
        </button>
      </div>
    </div>
  );
}

export default PantallaInicio;
