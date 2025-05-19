import React, { useContext } from 'react';
import { EspeciesContext } from './EspeciesProvider';
import './Timeline.css';

const Timeline = () => {

  const { especiesItems } = useContext(EspeciesContext);

  const convertirPeriodoANumero = (periodo) => {
    if (!periodo) return 0;
    const texto = periodo.toLowerCase().replace(',', '.').trim();

    const eras = {
      'cuaternario': 2_580_000,
      'pleistoceno': 2_580_000,
      'holoceno': 11_700,
      'neolítico': 12_000,
      'mesolítico': 15_000,
      'paleolítico': 2_500_000,
      'edad antigua': -3000,
      'edad media': 500,
      'edad moderna': 1500,
      'edad contemporánea': 1800,
      'jurásico': 201_000_000,
      'triásico': 252_000_000,
      'cretácico': 145_000_000,
      'devónico': 419_000_000,
      'carbonífero': 359_000_000,
      'silúrico': 443_000_000,
      'ordovícico': 485_000_000,
      'cámbrico': 541_000_000,
      'precámbrico': 4_000_000_000
    };

    for (const [clave, valor] of Object.entries(eras)) {
      if (texto.includes(clave)) return -valor;
    }

    const haceMillones = texto.match(/hace\s+([\d.]+)\s*(millones?)/);
    if (haceMillones) return -parseFloat(haceMillones[1]) * 1_000_000;

    const haceMiles = texto.match(/hace\s+([\d.]+)\s*(mil)/);
    if (haceMiles) return -parseFloat(haceMiles[1]) * 1_000;

    const haceAnios = texto.match(/hace\s+([\d.]+)\s*(años?)/);
    if (haceAnios) return -parseFloat(haceAnios[1]);

    const siglo = texto.match(/siglo\s+([ivxlcdm]+)(\s*a\.?c\.?)?/i);
    if (siglo) {
      const numeroRomano = siglo[1].toUpperCase();
      const esAC = siglo[2] !== undefined;
      const sigloArabigo = convertirRomanoANumero(numeroRomano);
      const año = (sigloArabigo - 1) * 100;
      return esAC ? -año : año;
    }

    const millones = texto.match(/([\d.]+)\s*millones?/);
    if (millones) return -parseFloat(millones[1]) * 1_000_000;

    const miles = texto.match(/([\d.]+)\s*mil/);
    if (miles) return -parseFloat(miles[1]) * 1_000;

    const numero = texto.match(/([\d.]+)/);
    if (numero) return parseFloat(numero[1]);

    return 0;
  };

  const convertirRomanoANumero = (romano) => {
    const valores = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;

    for (let i = 0; i < romano.length; i++) {
      const actual = valores[romano[i]];
      const siguiente = valores[romano[i + 1]];
      if (siguiente && actual < siguiente) {
        total += siguiente - actual;
        i++;
      } else {
        total += actual;
      }
    }

    return total;
  };

  const especiesOrdenadas = [...especiesItems].sort((a, b) =>
    convertirPeriodoANumero(a.periodo) - convertirPeriodoANumero(b.periodo)
  );

  return (
    <div className="timeline">
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Línea de Tiempo de Especies Extintas</h2>
      {especiesOrdenadas.map((esp, index) => (
        <div key={esp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content">
            <h4>{esp.nombre}</h4>
            <p><strong>Tipo:</strong> {esp.tipo_animal}</p>
            <p><strong>Período:</strong> {esp.periodo}</p>
            <p><strong>Hábitat:</strong> {esp.habitat}</p>
            <p><strong>Causas:</strong> {esp.causas.length > 0 && (
              <>
                {esp.causas[0]}
                {esp.causas.slice(1).map((causa, i) => ', ' + causa.charAt(0).toLowerCase() + causa.slice(1))}
              </>
            )}</p>
            {esp.imagen && <img src={esp.imagen} alt={esp.nombre} className="timeline-img" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
