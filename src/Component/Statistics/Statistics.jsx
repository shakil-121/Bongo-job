import React from "react";
import "./Statistics.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Assignment 01",
      mark: 60,
    },
    {
      name: "Assignment 02",
      mark: 59,
    },
    {
      name: "Assignment 03",
      mark: 58,
    },
    {
      name: "Assignment 04",
      mark: 58,
    },
    {
      name: "Assignment 05",
      mark: 42,
    },
    {
      name: "Assignment 06",
      mark: 42,
    },
    {
      name: "Assignment 07",
      mark: 60,
    },
    {
      name: "Assignment 08",
      mark: 58,
    },
  ];

  return (
    <div>
      <div className="graph">
        <h1 style={{textAlign:'center'}}>Assignment Marks Graph Chart</h1>
      </div>
      <div> 
        
        <AreaChart className="Chart" width={1100} height={420} data={data} style={{margin:'40px 80px'}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mark"
            stroke="#0066ff"
            fill="#0066ff94"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
