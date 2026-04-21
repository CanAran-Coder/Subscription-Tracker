'use server'

import { createClient } from "@/utils/supabase/server";

export async function SubscriptionDelete(id:number){

    const supabase = await createClient();
    const {error} = await supabase.from("Subscriptions").delete().eq("id",id)
    if(error){
        return {success:false,message:error.message}
    }
    else{
        return {success:true}
    }


}