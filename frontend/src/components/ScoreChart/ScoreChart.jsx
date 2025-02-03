/**
 * @file ScoreChart.jsx
 * @description Composant React pour afficher un graphique radial représentant le score quotidien d'un utilisateur.
 * 
 */
import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './scoreChart.css';

/**
 * Composant `ScoreChart`
 * 
 * @param {Object} props - Propriétés du composant.
 * @param {number} props.score - Le score de l'utilisateur, compris entre 0 et 1.
 * 
 * @returns {JSX.Element} Un graphique radial représentant le score de l'utilisateur.
 * 
 * @example
 * // Exemple d'utilisation :
 * const userScore = 0.85; // 85%
 * <ScoreChart score={userScore} />
 */
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
      
      <div className="score-chart-container">
      <h2 className="score-chart-title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="75%"
          outerRadius="100%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450} // Complète le cercle
          background={{ fill: '#FFFFFF' }}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false} 
          />
          <RadialBar
            clockWise
            dataKey="value"
            cornerRadius={10} // Coins arrondis
          />
          <text
            x="50%"
            y="45%"
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


