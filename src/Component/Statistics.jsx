import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Assignment 1', Marks: 60 },
    { name: 'Assignment 2', Marks: 50 },
    { name: 'Assignment 3', Marks: 58 },
    { name: 'Assignment 4', Marks: 59 },
    { name: 'Assignment 5', Marks: 60 },
    { name: 'Assignment 6', Marks: 60 },
    { name: 'Assignment 7', Marks: 60 },
    { name: 'Assignment 4', Marks: 30 },
  ];
  

const Statistics = () => {
    return (
        <div>
          <PieChart width={400} height={400}>
          <Pie
            dataKey="Marks"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
        </div>
    );
};

export default Statistics;