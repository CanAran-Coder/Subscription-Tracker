import ThisMonthPieChart from "@/components/ThisMonthPieChart";
import YearlyBarCharts from "@/components/YearlyBarCharts";
import CustomAddSubButton from "@/ui/CustomAddSubButton";
import CustomLogoutButton from "@/ui/CustomLogoutButton";
import CustomRedirectButton from "@/ui/CustomRedirectButton";
import { createClient } from "@/utils/supabase/server";

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


    const theData:any[]|null = await ThisYearData()

    const yearlyData = await ThisYearData();


    return (<>
        <section className=" flex flex-col justify-center items-center flex-1 md:grid md:grid-cols-2">
            {theData ? <ThisMonthPieChart data={theData}></ThisMonthPieChart>: ""}
            {yearlyData ? <YearlyBarCharts data={yearlyData}/> : ""}
            <div className="flex justify-center items-center gap-1 pb-2 w-full md:hidden">
                <CustomAddSubButton/>
                <CustomRedirectButton href="/subscriptions">Subscriptions</CustomRedirectButton>
                <CustomLogoutButton></CustomLogoutButton>
            </div>
        </section>
        
    </>);   
}

export default Dashboard;   