'use server'
import { createClient } from "@/utils/supabase/server";


export async function addSubscription(formData:FormData){


    const supabase = await createClient();
    
    const rawData = Object.fromEntries(formData.entries())

    const {data} = await supabase.from("sub_cat").select("id").eq("name",rawData.brandName).single();

    const user = await supabase.auth.getUser()
    const user_id = user.data.user?.id

    const {error} = await supabase.from("Subscriptions").insert({start_date:rawData.startDate,
        end_date:rawData.endDate,
        price:rawData.price,
        sub_id:data?.id,
        user_id:user_id

    });

    if(error){
        return {success:false,message:error.message}
    }
    else{
        return{success:true}
    }


}