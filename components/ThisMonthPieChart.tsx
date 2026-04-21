'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import {getColors} from "@/lib/RandomColor";
ChartJS.register(ArcElement, Tooltip, Legend);

function ThisMonthPieChart({ data }: { data: any[] }) {

    
    if(!data || data.length == 0){
        return <h1 className="text-center md:text-xl text-[var(--light-color)]">No Data To Show!</h1>

    }

    const chartsData = {
        labels:data.map((item) => item.sub_cat.name),
        datasets:[{
            label:"Price",
            data:data.map((item) => item.price),
            backgroundColor:getColors(data.length),
            borderWidth:1
        }]
    };

    let totalPrice = 0;
    data.forEach((item) => {
        totalPrice += item.price  
    })
    return (
        <div className="w-full h-full flex flex-col gap-10 justify-center items-center ">
            <h1 className="text-center px-3 font-bold md:text-3xl bg-[var(--dark-color)] text-[var(--light-color)] rounded ">This Month:{totalPrice}</h1>
            <div className="w-full overflow-hidden  flex justify-center items-center md:h-150"><Pie data={chartsData}/></div>
            
        </div>
    )


}

export default ThisMonthPieChart;