import SubscriptionsPage from "@/components/SubscriptionsPage";
import { createClient } from "@/utils/supabase/server";



async function Subscriptions() {

    const supabase = await createClient();

    const user = await supabase.auth.getUser();
    const user_id = user.data.user?.id
    const {data} = await supabase.from("Subscriptions").select("*,sub_cat(name,logo)").eq("user_id",user_id)


    return ( <>
    
        <SubscriptionsPage data={data ?? []}></SubscriptionsPage>

    </> );
}

export default Subscriptions;