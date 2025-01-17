/**
 * @file AverageSessionChart.jsx
 * @description Composant React qui affiche un graphique en courbes représentant la durée moyenne des sessions d'activité d'un utilisateur.
 * Ce graphique montre les données des sessions sur une semaine, avec des jours abrégés comme axes X.
 */
import React from 'react';
import { LineChart, Line, XAxis,YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
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
        <div
          style={{
            background: "#FFFFFF",
            color: "#000000",
            padding: "1em 1em",
            textAlign: "center",
            fontSize: "8px",
            fontWeight: "500",
            fontFamily: "Roboto",
            width: "39px",
            height: "25px"
          }}
        >
          <p>{payload[0].value} min</p>
        </div>
      );
  }
  return null;
};

/**
 * Composant principal pour afficher un graphique en courbes représentant la durée moyenne des sessions.
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
 * @returns {JSX.Element} Retourne le graphique en courbes.
 */
export default function AverageSessionChart ({ data }) {
  if (!data || data.length === 0) {
    return <p>Pas de données disponibles</p>;
  }

  // Jours abrégés pour l'axe X
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; 

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
      >
         {/* Gradient pour la ligne */}
        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
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
            fillOpacity: "0.5",
           
          }}
        >
          Durée moyenne des sessions
        </text>
         {/* Axe X */}
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#FFFFFF", fillOpacity: "50%", fontSize: 12 }}
          stroke="#FFFFFF"
          tickMargin={10}
          tickFormatter={(day) => days[day - 1]}
        />
         {/* Axe Y (caché) */}
        <YAxis
          dataKey="sessionLength"
          hide={true}
          domain={["dataMin -20", "dataMax + 50"]}
        />
        {/* Ligne */}
        <Line
          dataKey="sessionLength"
          type="natural"
          stroke="url(#lineGradient)"
          strokeWidth={2.5}
          dot={false}
          activeDot={{
            stroke: "#FFFFFF",
            strokeOpacity: "50%",
            strokeWidth: 0,
           
          }}
        />
         {/* Tooltip */}
        <Tooltip
          content={CustomTooltip}
          cursor={{
            stroke: "#000000",
            strokeOpacity: "10%",
            strokeWidth: "20%",
            height: "100%",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};


