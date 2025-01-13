import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './performanceRadar.css';

export default function  PerformanceRadar  ({ data }) {
  if (!data || data.length === 0) {
    return <p>Pas de données disponibles</p>;
  }

  const KindAjour = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  }

  // Mapper les noms des catégories à partir de `kind`
  const formattedData = data.data.map((item) => ({
    ...item,
    kind: KindAjour[item.kind],
  }));

  return (
    <div className="performance-radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={formattedData} cx="50%" cy="50%" outerRadius="65%">
          {/* Grille */}
          <PolarGrid radialLines={false} stroke="#FFFFFF" />
          {/* Axes des catégories */}
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: '#FFFFFF', fontSize: 12 }}
          />
          {/* Radar */}
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};


