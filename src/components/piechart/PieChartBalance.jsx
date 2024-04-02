import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Solde Principal", value: 1000, color: "#8884d8" },
  { name: "Intérêt", value: 2, color: "#82ca9d" },
  { name: "Prêt", value: 500, color: "#ffc658" },
];

export default function PieChartBalance() {
  return (
    <div className="flex w-full h-30 items-center justify-center">
      <ResponsiveContainer width="90%" height="80%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={180} // Réduit le rayon du cercle
            innerRadius={10} // Définit la taille intérieure à 3/4 de la taille extérieure
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right" // Alignement à droite
            layout="vertical" // Disposition verticale
            wrapperStyle={{
              marginRight: "5rem", // Marge à droite
              width: "50%", // Taille de la légende à 2/4
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Centrer horizontalement
            }}
            payload={data.map((entry, index) => ({
              value: entry.name,
              id: entry.name,
              type: "circle",
              color: entry.color,
              payload: entry,
            }))}
            content={({ payload }) => (
              <div
                className="flex flex-col items-end"
                style={{ width: "100%" }}
              >
                {payload.map((entry, index) => (
                  <div key={`item-${index}`} className="flex items-center mb-2">
                    <svg width="20" height="20">
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        fill={entry.payload.color}
                      />
                      <text
                        x="10"
                        y="15"
                        fill="#ffffff"
                        fontSize="10"
                        textAnchor="middle"
                      >
                        {entry.value}
                      </text>
                    </svg>
                    <span>{entry.value}</span>
                  </div>
                ))}
              </div>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
