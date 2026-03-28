"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import "../globals.css";
const Card = ({ title, children }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
    <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 font-semibold">{title}</div>
    <div className="p-4">{children}</div>
  </div>
);

const OcdAssessmentDashboard = () => {
  const result = 75; // Example result percentage
  const data = [
    { name: 'Result', value: result },
    { name: 'Remaining', value: 100 - result },
  ];
  const COLORS = ['#0088FE', '#FFFFFF'];

  return (
    <div className="p-4 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">OCD Assessment Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Result in %">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center text-xl font-bold">{result}%</div>
        </Card>

        <Card title="How prone to OCD">
          <div className="text-xl font-semibold">Very much</div>
        </Card>

        <Card title="Detailed Breakdown">
          <ul className="list-disc pl-5">
            <li>Obsessions: Mild</li>
            <li>Compulsions: Moderate</li>
            <li>Anxiety: High</li>
          </ul>
        </Card>

        <Card title="Suggestions">
          <p>Recommended therapies and practices...</p>
        </Card>

        <Card title="Call to Action">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Get Help Now
          </button>
        </Card>
      </div>
    </div>
  );
};

export default OcdAssessmentDashboard;