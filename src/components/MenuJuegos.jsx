function MenuJuegos({ juegoActivo, setJuegoActivo }) {
  const juegos = [
    {
      id: "preguntas",
      texto: "📝 Preguntas",
    },
    {
      id: "memoria",
      texto: "🃏 Memoria",
    },
  ];
  return (
    <div className="menu-juegos">
      <p>🎮 Elige un juego</p>
      {juegos.map((juego) => (
        <button
          key={juego.id}
          className={
            juegoActivo === juego.id
              ? "btn-juego btn-juego-activo"
              : "btn-juego"
          }
          onClick={() => setJuegoActivo(juego.id)}
        >
          {juego.texto}
        </button>
      ))}
    </div>
  );
}

export default MenuJuegos;
