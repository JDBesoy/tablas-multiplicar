function SidebarJugador({
  jugadorActivo,
  tablas,
  tablaSeleccionada,
  setTablaSeleccionada,
  setJugadorActivo,
  mejorRacha
}) {
  return (
    <aside className="sidebar-jugador">
      <div className="perfil-jugador">
        <h3>{jugadorActivo}</h3>
        <p>👑 {mejorRacha} </p>
      </div>
      <button className="btn-cambiar-jugador"
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
              onClick={() => setTablaSeleccionada(tabla)}
            >
              {tabla}
            </button>

            <span className="ranking-tabla">--</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SidebarJugador;
