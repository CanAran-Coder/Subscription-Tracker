import { createClient } from "@/utils/supabase/server";

async function Dashboard() {

    const supabase = await createClient();
    const user_id = (await supabase.auth.getUser()).data.user?.id
    const {data} = await supabase.from("Subscriptions").select("*").eq("user_id",user_id)
    
    const thisMonthPayments:any[] = []
    const thisYear = (new Date()).getFullYear()
    const thisMonth = (new Date()).getMonth()

    data?.forEach((item)=>{
        const endDate = new Date(item.end_date)
        if(endDate.getFullYear() == thisYear && endDate.getMonth() == thisMonth ){
            thisMonthPayments.push(item)
        }   
    })

    console.log(thisMonthPayments)



    return ( <>
        
    </> );
}

export default Dashboard;   