'use client'
import { getColors } from "@/lib/RandomColor"

import {
    Chart as ChartJS,
    CategoryScale, // X ekseni
    LinearScale,   // Y ekseni
    BarElement,    // Çubuklar
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Kayıt işlemini yapıyoruz
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function YearlyBarCharts({ data }: { data: any[] }) {


    const chartData = {
        labels: data.map(item => item.sub_cat.name),
        datasets: [{
            label: "Price",
            data: data.map(item => item.price),
            backgroundColor: getColors(data.length),
            borderWidth: 1,
            borderRadius: 5
        }]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },

    }
    
    let totalPrice = 0;
    data.forEach((item) => {
        totalPrice += item.price  
    })

    return (<>
        <div className="w-full h-full flex flex-col gap-10 justify-center  items-center overflow-hidden ">
            <h1 className="text-center px-3 font-bold md:text-3xl bg-[var(--dark-color)] text-[var(--light-color)] rounded ">All Subscriptions:{totalPrice}</h1>
            <div className="flex justify-center overflow-hidden items-center w-full h-120 px-5">
                <Bar data={chartData} options={options} />
            </div>
            
        </div>

    </>)
}

export default YearlyBarCharts;