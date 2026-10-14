function TablaMultiplicar({ tabla, numeroPregunta }) {
  const numeros = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="tabla-multiplicar">
      <h2 className="tabla-titulo">Tabla del {tabla}</h2>
      {numeros.map((numero) => (
        <p
          key={numero}
          className={
            numero === numeroPregunta
              ? "operacion operacion-activa"
              : "operacion"
          }
        >
          {tabla} × {numero} = {tabla * numero}
        </p>
      ))}
    </div>
  );
}

export default TablaMultiplicar;
