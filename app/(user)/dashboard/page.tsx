import ThisMonthPieChart from "@/components/ThisMonthPieChart";
import YearlyBarCharts from "@/components/YearlyBarCharts";
import { createClient } from "@/utils/supabase/server";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

async function Dashboard() {

    const supabase = await createClient();
    const user_id = (await supabase.auth.getUser()).data.user?.id
    const { data } = await supabase.from("Subscriptions").select("*,sub_cat(name,logo)").eq("user_id", user_id)


    function ThisMonthData() {
        const thisMonthPayments: any[] = []
        const thisYear = (new Date()).getFullYear()
        const thisMonth = (new Date()).getMonth()

        data?.forEach((item) => {
            const endDate = new Date(item.end_date)
            if (endDate.getFullYear() == thisYear && endDate.getMonth() == thisMonth) {
                thisMonthPayments.push(item)
            }
        })
        return thisMonthPayments
    }

    async function ThisYearData(){
        const {data} = await supabase.from("Subscriptions").select("*,sub_cat(name,logo)").eq("user_id",user_id)
        return data
    }




    const yearlyData = await ThisYearData();


    return (<>
        <section className="flex-1 grid grid-cols-2">
            <ThisMonthPieChart data={ThisMonthData()} />
            {yearlyData ? <YearlyBarCharts data={yearlyData}/> : ""}
        </section>
        
    </>);   
}

export default Dashboard;   