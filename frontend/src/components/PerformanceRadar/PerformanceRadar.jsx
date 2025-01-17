/**
 * @file PerformanceRadar.jsx
 * @description Composant React pour afficher un graphique radar représentant les performances d'un utilisateur.
 * 
 */

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './performanceRadar.css';

/**
 * Composant `PerformanceRadar`
 * 
 * @param {Object} props - Propriétés du composant.
 * @param {Object} props.data - Les données de performance à afficher.
 * @param {Array} props.data.data - Un tableau contenant les valeurs des performances.
 * @param {Object} props.data.kind - Un objet mappant les indices aux noms des catégories (par exemple : {1: "Cardio", 2: "Energie"}).
 * 
 * @returns {JSX.Element} Un graphique radar représentant les performances d'un utilisateur.
 * 
 * @example
 * const performanceData = {
 *   kind: {1: "Cardio", 2: "Energie", 3: "Endurance", 4: "Force", 5: "Vitesse", 6: "Intensité"},
 *   data: [
 *     { value: 80, kind: 1 },
 *     { value: 120, kind: 2 },
 *     { value: 140, kind: 3 },
 *     { value: 50, kind: 4 },
 *     { value: 200, kind: 5 },
 *     { value: 90, kind: 6 },
 *   ],
 * };
 * 
 * <PerformanceRadar data={performanceData} />
 */
export default function  PerformanceRadar  ({ data }) {
  if (!data || data.length === 0) {
    return <p>Pas de données disponibles</p>;
  }
// Noms des catégories mappés à partir de `kind`
  const KindAjour = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  }

    // Formater les données avec les noms des catégories
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


