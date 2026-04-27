'use server'

import { createClient } from "@/utils/supabase/server"

interface dataType{
    id:number
    name:string,
    logo:string,
    created_at:any
}

export async function getSubCat(){
    const supabase = await createClient();
    const {data} = await supabase.from("sub_cat").select("*")
    const myData:dataType[] = data ?? []
    return myData
    
}