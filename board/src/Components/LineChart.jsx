import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Activites',
        },
        legend: {
            position: 'top',
        },
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        },
    },
};

const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', ' '];

export const data = {
    labels,
    datasets: [
        {
            label: 'Guest',
            data: [200, 400, 200, 300, 220, 460],
            borderColor: '#E9A0A0',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
            lineTension: 0.5,
        },
        {
            label: 'User',
            data: [100, 400, 150, 450, 180, 250],
            borderColor: '#9BDD7C',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y',
            lineTension: 0.5,
        },
    ],
};

const LineChart = () => {
    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default LineChart;