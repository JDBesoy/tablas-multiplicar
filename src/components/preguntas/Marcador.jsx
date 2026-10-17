function Marcador({ aciertos, errores }) {
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

    </div>
  );
}

export default Marcador;
