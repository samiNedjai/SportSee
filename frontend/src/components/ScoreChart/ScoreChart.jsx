import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './scoreChart.css';

export default function ScoreChart ({ score }) {
  // Préparer les données pour le graphique
  const data = [
    {
      name: 'Score',
      value: score * 100, // Convertir le score en pourcentage
      fill: '#FF0000', // Couleur rouge pour le cercle
    },
  ];

  return (
    <div className="score-chart">
      <h2 className="score-chart-title">Score</h2>
      <div className="score-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="90%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450} // Complète le cercle
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false} // Masquer les ticks
          />
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            cornerRadius={10} // Coins arrondis
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-chart-label"
          >
            <tspan className="score-chart-percentage">{`${score * 100}%`}</tspan>
            <tspan x="50%" dy="20" className="score-chart-subtext">
              de votre
            </tspan>
            <tspan x="50%" dy="20" className="score-chart-subtext">
              objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};


