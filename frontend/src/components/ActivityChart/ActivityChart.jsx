/**
 * @file ActivityChart.jsx
 * @description Composant React qui affiche un graphique en barres représentant l'activité quotidienne d'un utilisateur. 
 * Ce graphique affiche les calories brûlées et le poids (en kg) pour chaque jour.
 */
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import "./activityChart.css"


/**
 * Composant personnalisé pour afficher un tooltip avec les données de poids (kg) et de calories (kCal).
 * 
 * @param {Object} props - Propriétés du tooltip.
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array} props.payload - Contient les données affichées dans le tooltip.
 * @returns {JSX.Element|null} Retourne un tooltip personnalisé ou `null` si aucune donnée n'est disponible.
 */
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

/**
 * Composant principal pour afficher un graphique en barres représentant l'activité quotidienne.
 * 
 * @param {Object} props - Propriétés du composant.
 * @param {Array} props.data - Données représentant les sessions d'activité quotidienne.
 * Chaque élément du tableau doit inclure `day`, `kilogram`, et `calories`.
 * <ActivityChart data={data} />
 * 
 * @returns {JSX.Element} Retourne le graphique en barres.
 */
export default function  ActivityChart ({ data }) {
  if (!data || data.length === 0) {
    return <p>Pas de données disponibles</p>;
  }

   // Prétraitement des données pour ajouter un index (numéro de jour)
  const processedData = data.map((session, index) => ({
    ...session,
    index: index + 1, 
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
        {/* Barres du graphique */}
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


