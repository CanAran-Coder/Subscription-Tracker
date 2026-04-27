'use server'

import { createClient } from "@/utils/supabase/server"


export async function getSubscriptionById(id:number){

    const supabase = await createClient();
    const {data} = await supabase.from("Subscriptions").select("*,sub_cat(name,logo)").eq("id",id).single()
    return data

}