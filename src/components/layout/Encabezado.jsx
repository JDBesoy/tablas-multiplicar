function Encabezado({ jugadorActivo, setJugadorActivo }) {
  return (
    <div className="titulo-principal">
      <h1> 🧮 TABLAS DE MULTIPLICAR </h1>
      <p>Para aprender y practicar las tablas de multiplicar (SoPa)</p>
      <p>Jugador: {jugadorActivo}</p>
      <button className="btn-crear-jugador"
        onClick={() => {
          localStorage.removeItem("jugadorActivo");
          setJugadorActivo("");
        }}
      >
        Cambiar jugador
      </button>
    </div>
  );
}

export default Encabezado;
