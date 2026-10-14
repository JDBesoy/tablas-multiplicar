function Pregunta({ tabla, numeroPregunta }) {
  return (
    <div className="pregunta">
    <p className="texto-pregunta">Cuánto es </p>
    <p className="texto-pregunta">{tabla} x {numeroPregunta}?</p>
    </div>
  );
}

export default Pregunta;
