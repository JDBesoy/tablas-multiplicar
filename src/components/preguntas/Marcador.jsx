function Marcador({ puntuacion, aciertos, errores }) {
  return (
    <div className="marcador">
      <div className="marcador-item">
        <h3 >Aciertos</h3>
        <p className="aciertos">{aciertos}</p>
      </div>

      <div className="marcador-item">
        <h3>Errores</h3>
        <p className="errores">{errores}</p>
      </div>

      <div className="marcador-item">
        <h3>Puntuación</h3>
        <p className="puntuacion">{puntuacion}</p>
      </div>
    </div>
  );
}

export default Marcador;
