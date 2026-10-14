function Respuesta({
  respuestaUsuario,
  setRespuestaUsuario,
  comprobarRespuesta,
  comprobacion,
}) {
  return (
    <div className="respuesta">
      <input
        type="number"
        value={respuestaUsuario}
        onChange={(e) => setRespuestaUsuario(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            comprobarRespuesta();
          }
        }}
      />
      <button className="btn-comprobar" onClick={comprobarRespuesta}>
        Comprobar
      </button>
      <p
        className={
          comprobacion.includes("Correcto")
            ? "mensaje-correcto"
            : "mensaje-error"
        }
      >
        {comprobacion}
      </p>
    </div>
  );
}

export default Respuesta;
