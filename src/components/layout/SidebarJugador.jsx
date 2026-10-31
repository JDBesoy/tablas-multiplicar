function SidebarJugador({
  jugadorActivo,
  tablas,
  tablaSeleccionada,
  setTablaSeleccionada,
  setJugadorActivo,
  mejorRacha,
}) {
  const jugadores = JSON.parse(localStorage.getItem("jugadores")) || {};

  const jugador = jugadores[jugadorActivo];
  return (
    <aside className="sidebar-jugador">
      <div className="perfil-jugador">
        <h3>{jugadorActivo}</h3>
        <p>👑 {mejorRacha} </p>
      </div>
      <button
        className="btn-cambiar-jugador"
        onClick={() => {
          localStorage.removeItem("jugadorActivo");
          setJugadorActivo("");
        }}
      >
        Cambiar jugador
      </button>
      <div className="contenido-sidebar">
        <div className="cabecera-sidebar">
          <span>📚 Tabla</span>
          <span>🏆 Record</span>
        </div>

        {tablas.map((tabla) => (
          <div key={tabla} className="fila-tabla">
            <button
              className={
                tablaSeleccionada === tabla
                  ? "btn-tabla btn-tabla-activa"
                  : "btn-tabla"
              }
              onClick={() => {
                setTablaSeleccionada(tabla);
                // Al cambiar de tabla se reinicia la racha actual
                // pero se conserva la mejor racha histórica.
                const jugadores =
                  JSON.parse(localStorage.getItem("jugadores")) || {};

                const jugador = jugadores[jugadorActivo];

                jugador.tablas[tabla].rachaActual = 0;

                localStorage.setItem("jugadores", JSON.stringify(jugadores));
              }}
            >
              {tabla}
            </button>

            <span className="ranking-tabla">
              {jugador?.tablas?.[tabla]?.mejorRacha ?? 0}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SidebarJugador;
