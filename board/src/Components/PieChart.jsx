import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '',
      data: [14, 31,55],
      backgroundColor: [
        '#EE8484',
        '#F6DC7D',
        '#98D89E',
      ],
      borderColor: [
        '#EE8484',
        '#F6DC7D',
        '#98D89E',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (<div style={{width:'200px',padding:'0px 75px 25px 55px'}}>
    <Pie data={data} />
  </div>

  )
}

export default PieChart