'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache";

export async function UpdateEdit(formData:FormData,id:number){



    const rawData = Object.fromEntries(formData.entries())
    const supabase = await createClient();
    const {data} = await supabase.from("sub_cat").select("id").eq("name",rawData.brandName).single()

    const {error,count} = await supabase.from("Subscriptions").update({end_date:rawData.endDate,start_date:rawData.startDate,price:rawData.price,sub_id:data?.id}).eq("id",id)
    if(error){
        return {success:false,message:error.message}
    }
    else{
        revalidatePath("/subscriptions")
        return {success:true}
        
    }


}