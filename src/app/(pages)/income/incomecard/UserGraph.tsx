"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  defs,
} from "recharts";

const data = [
  { month: "Jan", value: 25.48255 },
  { month: "Feb", value: 25.4825 },
  { month: "Mar", value: 25.482 },
  { month: "Apr", value: 2583 },
  { month: "May", value: 25 },
  { month: "Jun", value: 100 },
  { month: "Jul", value: 300 },
  { month: "Aug", value: 450 },
  { month: "Sep", value: 200 },
  { month: "Oct", value: 500 },
  { month: "Nov", value: 400 },
  { month: "Dec", value: 600 },
];

const UserGraph = () => {
  const [period, setPeriod] = useState("Daily");

  return (
    <div className="bg-white p-6 rounded-lg mt-6 shadow-lg">
      {/* Header / Period Selection */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">User Information</h2>
        <div className="flex gap-2">
          {["Daily", "Weekly", "Monthly"].map((p) => (
            <button
              key={p}
              className={`px-3 py-1 rounded ${
                period === p ? "bg-[#42b3ce] text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setPeriod(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Graph */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#42b3ce" stopOpacity={1} />
              <stop offset="100%" stopColor="#00c6ff" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGraph;
