import React, { useEffect, useState } from 'react'
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


const LineChart = () => {
    const [data, setData] = useState({
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', ' '],
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
    })

    useEffect(() => {
        const fetchData = () => {
            const url = 'https://mock-7-backend.onrender.com/users'
            const dataSet1 = [];
            const dataSet2 = [];
            fetch(url, {
                method: 'GET'
            }).then(data => {
                console.log('data', data)
                const res = data.json()
                return res
            }).then(res => {
                console.log('data', res)
                for (const val of res) {
                    dataSet1.push(val.guest)
                    dataSet2.push(val.user)
                }
                console.log(dataSet1, dataSet2)
                setData({
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', ' '],
                    datasets: [
                        {
                            label: 'Guest',
                            data: dataSet1,
                            borderColor: '#E9A0A0',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            yAxisID: 'y',
                            lineTension: 0.5,
                        },
                        {
                            label: 'User',
                            data: dataSet2,
                            borderColor: '#9BDD7C',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            yAxisID: 'y',
                            lineTension: 0.5,
                        },
                    ],
                })
            }).catch(err => {
                console.log('err', err)
            })

        }

        fetchData()
    }, [])

    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default LineChart;