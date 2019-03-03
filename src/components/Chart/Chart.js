import React from 'react';
//import PieChart from 'react-minimal-pie-chart';
import {
  PieChart, Pie, Cell,
} from 'recharts';
import './Chart.css';


const Chart = (props) => {
  const data = [
    { name: 'Males', value: props.males },
    { name: 'Females', value: props.females },
  ];

  
const COLORS = ['#0088FE', '#FF69B4', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ( {
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const item = data[index];
  
   const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      { `${item.name} ${(percent * 100).toFixed(0)}%`}
    </text>
    
  );
};
    return (<div className="align-items-center justify-content-center text-center" >
       
      <PieChart width={500} height={450}>
        <Pie
          data={data}
          cx={250}
          cy={200}
          labelLine={true}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie> <p>Legend: </p>
              <p>Female Color Teal<br></br>
              Female Color Blue</p>
      </PieChart>
      
    
    </div> 
    )
}

export default Chart;





  



















