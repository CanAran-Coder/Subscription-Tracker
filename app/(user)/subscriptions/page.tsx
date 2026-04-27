import SubscriptionsPage from "@/components/SubscriptionsPage";
import { createClient } from "@/utils/supabase/server";
import CustomAddSubButton from "@/ui/CustomAddSubButton";
import CustomLogoutButton from "@/ui/CustomLogoutButton";
import CustomRedirectButton from "@/ui/CustomRedirectButton";


async function Subscriptions() {

    const supabase = await createClient();

    const user = await supabase.auth.getUser();
    const user_id = user.data.user?.id
    const { data } = await supabase.from("Subscriptions").select("*,sub_cat(name,logo)").eq("user_id", user_id)


    return (<>

        <SubscriptionsPage data={data ?? []}></SubscriptionsPage>
        <div className="flex justify-center items-center gap-1 pb-2 w-full md:hidden">
            <CustomAddSubButton />
            <CustomRedirectButton href="/dashboard">Dashboard</CustomRedirectButton>
            <CustomLogoutButton></CustomLogoutButton>
        </div>

    </>);
}

export default Subscriptions;