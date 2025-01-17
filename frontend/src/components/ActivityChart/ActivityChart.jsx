import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import "./activityChart.css"


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const kilogram = payload.find((item) => item.dataKey === "kilogram").value;
    const calories = payload.find((item) => item.dataKey === "calories").value;

    return (
      <div style={{
        backgroundColor: "#E60000",
        color: "#FFFFFF",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "12px",
        lineHeight: "20px",
        textAlign: "center",
      }}>
        <p>{kilogram}kg</p>
        <p>{calories}Kcal</p>
      </div>
    );
  }

  return null;
};

export default function  ActivityChart ({ data }) {
  if (!data || data.length === 0) {
    return <p>Pas de données disponibles</p>;
  }

  const processedData = data.map((session, index) => ({
    ...session,
    index: index + 1, // Ajoute un numéro de jour
  }));

  return (
    <ResponsiveContainer width="90%" height="80%">
      <BarChart data={processedData} barGap={12} barSize={8}>
        {/* Titre */}
        <text
          x={0}
          y={20}
          textAnchor="left"
          style={{
            fontfamily: "Roboto",
            fontsize:16,
            fontstyle: "normal",
            fontweight:500,
            lineheight: 24,
            fill: "#20253A",
          }}
        >
          Activité quotidienne
        </text>

        {/* Grille et axes */}
        <CartesianGrid strokeDasharray="3 3" opacity={0.5} vertical={false} />
        <XAxis
          dataKey="index"
          tickLine={false}
          axisLine={{ stroke: "#DEDEDE" }}
          tick={{ fontSize: 14, fill: '#9B9EAC', fontFamily:"roboto",dy: 16 }}
        />
        <YAxis
          orientation="right" 
          tickLine={false}
          axisLine={false}
           type="number"
          tick={{ fontSize: 14, fill: '#9B9EAC' }}
        />

        {/* Légende personnalisée */}
        
        <Legend
        y={17}
        x={17}
          verticalAlign="top"
          // className='recharts-default-legend'
          align="right"
          iconType="circle"
          wrapperStyle={{ paddingBottom: 30 }}
          formatter={(value) => {
            if (value === 'kilogram') return <span style={{ color: '#74798C', fontFamily:"roboto",fontSize:"14px", fontweight:"500" }}>Poids (kg)</span>;
            if (value === 'calories') return <span style={{ color: '#74798C', fontFamily:"roboto",fontSize:"14px", fontweight:"500"}}>Calories brûlées (kCal)</span>;
            return value;
          }}
        />

        {/* Tooltip personnalisé */}
        <Tooltip content={<CustomTooltip />} />
        {/* Barres */}
        <Bar 
        dataKey="kilogram" 
        fill="#282D30" 
        radius={[10, 10, 0, 0]} />
        <Bar 
        dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};


