import { useState } from "react";

function PantallaInicio({ iniciarJuego }) {
  const [nombre, setNombre] = useState("");

  const [jugadores, setJugadores] = useState(
    JSON.parse(localStorage.getItem("jugadores")) || {},
  );
  function eliminarJugador(nombre) {
    if (!window.confirm(`¿Eliminar al jugador "${nombre}"?`)) {
      return;
    }
    const nuevosJugadores = {
      ...jugadores,
    };

    delete nuevosJugadores[nombre];

    localStorage.setItem("jugadores", JSON.stringify(nuevosJugadores));

    setJugadores(nuevosJugadores);

    if (localStorage.getItem("jugadorActivo") === nombre) {
      localStorage.removeItem("jugadorActivo");
    }
  }
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

        tablas: {
          2: {
            mejorRacha: 0,
            aciertos: 0,
            errores: 0,
            rachaActual: 0,
          },

          3: {
            mejorRacha: 0,
            aciertos: 0,
            errores: 0,
            rachaActual: 0,
          },

          4: {
            mejorRacha: 0,
            aciertos: 0,
            errores: 0,
            rachaActual: 0,
          },

          5: {
            mejorRacha: 0,
            aciertos: 0,
            errores: 0,
            rachaActual: 0,
          },

          6: {
            mejorRacha: 0,
            aciertos: 0,
            errores: 0,
            rachaActual: 0,
          },

          7: {
            mejorRacha: 0,
            aciertos: 0,
            errores: 0,
            rachaActual: 0,
          },

          8: {
            mejorRacha: 0,
            aciertos: 0,
            errores: 0,
            rachaActual: 0,
          },

          9: {
            mejorRacha: 0,
            aciertos: 0,
            errores: 0,
            rachaActual: 0,
          },

          10: {
            mejorRacha: 0,
            aciertos: 0,
            errores: 0,
            rachaActual: 0,
          },
        },
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

    const jugadores = JSON.parse(localStorage.getItem("jugadores")) || {};

    const jugador = jugadores[nombre];

    // Reiniciar rachas actuales de todas las tablas
    Object.keys(jugador.tablas).forEach((tabla) => {
      jugador.tablas[tabla].rachaActual = 0;
    });

    localStorage.setItem("jugadores", JSON.stringify(jugadores));

    iniciarJuego(nombre);
  }

  return (
    <div className="pantalla-inicio">
      <div className="tarjeta-inicio">
        <h1>🧮 Tablas de Multiplicar</h1>

        <p>Quién va a jugar?</p>
        {Object.keys(jugadores).map((nombre) => (
          <div>
            <button
              className="btn-nombres"
              key={nombre}
              onClick={() => seleccionarJugador(nombre)}
            >
              {nombre}
            </button>
            <button
              className="btn-eliminar-jugador"
              onClick={() => eliminarJugador(nombre)}
            >
              ✕
            </button>
          </div>
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
