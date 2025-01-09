import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import "./activityChart.css"

const ActivityChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Pas de données disponibles</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barGap={8} barSize={7}>
        {/* Titre */}
        <text
          x={0}
          y={20}
          textAnchor="left"
          style={{
            fontfamily: "Roboto",
            fontsize:"15px",
            fontstyle: "normal",
            fontweight:"500",
            lineheight: "24px",
            fill: "#20253A",
          }}
        >
          Activité quotidienne
        </text>

        {/* Grille et axes */}
        <CartesianGrid strokeDasharray="3 3" opacity={0.5} vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, fill: '#9B9EAC' }}
        />
        <YAxis
          orientation="right" 
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, fill: '#9B9EAC' }}
        />

        {/* Légende personnalisée */}
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          formatter={(value) => {
            if (value === 'kilogram') return <span style={{ color: '#74798C', fontFamily:"roboto",fontSize:"14px", fontweight:"500" }}>Poids (kg)</span>;
            if (value === 'calories') return <span style={{ color: '#74798C', fontFamily:"roboto",fontSize:"14px", fontweight:"500" }}>Calories brûlées (kCal)</span>;
            return value;
          }}
        />

        {/* Tooltip personnalisé */}
        <Tooltip
          contentStyle={{
            backgroundColor: "#FF0101",
            color: "#FFF",
            fontSize: "12px",
            borderRadius: "5px",
          }}
          formatter={(value, name) => {
            if (name === "kilogram") return [`${value}kg`, "Poids"];
            if (name === "calories") return [`${value}kCal`, "Calories brûlées"];
          }}
        />

        {/* Barres */}
        <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
