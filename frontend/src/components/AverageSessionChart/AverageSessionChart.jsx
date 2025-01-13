import React from 'react';
import { LineChart, Line, XAxis,YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import './averageSessionChart.css';

// Tooltip personnalisé
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


const AverageSessionChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Pas de données disponibles</p>;
  }

  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; // Jours abrégés

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
      >
        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
          </linearGradient>
        </defs>
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
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#FFFFFF", fillOpacity: "50%", fontSize: 12 }}
          stroke="#FFFFFF"
          tickMargin={10}
          tickFormatter={(day) => days[day - 1]}
        />
        <YAxis
          dataKey="sessionLength"
          hide={true}
          domain={["dataMin -20", "dataMax + 50"]}
        />
        <Line
          dataKey="sessionLength"
          type="natural"
          stroke="url(#lineGradient)"
          strokeWidth={2.5}
          dot={false}
          activeDot={{
            stroke: "#FFFFFF",
            strokeOpacity: "50%",
            strokeWidth: 10,
          }}
        />
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

export default AverageSessionChart;
