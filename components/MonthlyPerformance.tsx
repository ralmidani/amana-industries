"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Factory } from "@/types/factory";

interface MonthlyPerformanceProps {
  factories: Factory[];
}

export default function MonthlyPerformance({ factories }: MonthlyPerformanceProps) {
  // Select first 3 factories for the chart (as shown in wireframe)
  const selectedFactories = factories.slice(0, 3);

  // Define colors for each factory
  const colors = ["#eab308", "#22c55e", "#ef4444"]; // yellow, green, red

  // Prepare data for the chart - combine all factories' production data by month
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const chartData = months.map((monthShort, index) => {
    const dataPoint: any = { month: monthShort };

    selectedFactories.forEach((factory, factoryIndex) => {
      const monthData = factory.production_level_2024[index];
      dataPoint[`factory${factoryIndex}`] = monthData ? Math.round(monthData.value / 10) : 0; // Scale down for better visualization
    });

    return dataPoint;
  });

  return (
    <div className="bg-orange-50 border-4 border-black p-6">
      <h2 className="text-2xl font-bold text-center mb-6 bg-yellow-600 py-3 border-2 border-black">
        Monthly Performance
      </h2>

      <div className="bg-white p-4 rounded">
        <div className="mb-4 flex items-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-gray-400"></span>
            Production (tons) by
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-orange-100"></span>
            Month for
          </span>
          {selectedFactories.map((factory, index) => (
            <span key={factory.id} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3"
                style={{ backgroundColor: colors[index] }}
              ></span>
              Factory {String.fromCharCode(65 + index)}
              {index < selectedFactories.length - 1 && ","}
            </span>
          ))}
          <span>and</span>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis
              label={{ value: 'Production (tons)', angle: -90, position: 'insideLeft' }}
              domain={[0, 200]}
              ticks={[0, 50, 100, 150, 200]}
            />
            <Tooltip
              formatter={(value: number) => `${value * 10} tons`}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Legend
              formatter={(value, entry, index) => {
                const factoryIndex = parseInt(value.replace('factory', ''));
                return `Factory ${String.fromCharCode(65 + factoryIndex)}`;
              }}
            />
            {selectedFactories.map((factory, index) => (
              <Bar
                key={factory.id}
                dataKey={`factory${index}`}
                fill={colors[index]}
                name={`factory${index}`}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
