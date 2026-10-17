function FooterEstadisticas({
  aciertosHoy,
  erroresHoy,
  rachaActual,
  aciertosTotales,
}) {
  return (
    <footer className="footer-estadisticas">
      <div>✅ {aciertosHoy}</div>

      <div>❌ {erroresHoy}</div>

      <div>🔥 {rachaActual}</div>

      <div>🏆 {aciertosTotales}</div>
    </footer>
  );
}

export default FooterEstadisticas;
