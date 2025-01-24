/**
 * @file AverageSessionChart.jsx
 * @description Composant React qui affiche un graphique en aires représentant la durée moyenne des sessions d'activité d'un utilisateur.
 */
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './averageSessionChart.css';

/**
 * Tooltip personnalisé pour afficher la durée moyenne d'une session en minutes.
 * 
 * @param {Object} props - Propriétés du tooltip.
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array} props.payload - Contient les données affichées dans le tooltip.
 * @returns {JSX.Element|null} Retourne un tooltip personnalisé ou `null` si aucune donnée n'est disponible.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="average-tooltip">
        <p>{payload[0].value} min</p>
      </div>
    );
  }
  return null;
};

/**
 * Composant principal pour afficher un graphique en aires représentant la durée moyenne des sessions.
 * 
 * @param {Object} props - Propriétés du composant.
 * @param {Array} props.data - Données des sessions d'activité.
 * Chaque élément du tableau doit inclure `day` (1-7) et `sessionLength` (durée en minutes).
 * 
 * @example
 * const data = [
 *   { day: 1, sessionLength: 30 },
 *   { day: 2, sessionLength: 45 },
 * ];
 * 
 * <AverageSessionChart data={data} />
 * 
 * @returns {JSX.Element} Retourne le graphique en aires.
 */
export default function AverageSessionChart({ data }) {
  if (!data || data.length === 0) {
    return <p>Pas de données disponibles</p>;
  }

  // Jours abrégés pour l'axe X
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
      >
        {/* Gradient pour la zone */}
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Titre */}
        <text
          x={10}
          y={30}
          textAnchor="left"
          style={{
            fontSize: "15px",
            fontWeight: 500,
            fill: "#FFFFFF",
            fillOpacity: "0.7",
          }}
        >
          Durée moyenne des sessions
        </text>
        {/* Axe X */}
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#FFFFFF", fillOpacity: "70%", fontSize: 12 }}
          tickMargin={10}
          tickFormatter={(day) => days[day - 1]}
        />
        {/* Axe Y (caché) */}
        <YAxis
          dataKey="sessionLength"
          hide={true}
          domain={["dataMin - 10", "dataMax + 10"]}
        />
        {/* Zone */}
        <Area
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#areaGradient)"
          strokeWidth={2}
          fill="url(#areaGradient)"
          activeDot={{
            r: 5,
            fill: "#FFFFFF",
            stroke: "#FFFFFF",
            strokeOpacity: "100%",
            strokeWidth: 2,
          }}
        />
        {/* Tooltip */}
        <Tooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
