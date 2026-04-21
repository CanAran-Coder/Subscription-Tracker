'use server'
import { createClient } from "@/utils/supabase/server"
import { LoginSchema } from "@/lib/authSchema";



export async function RegisterAction(formData:FormData){
    const supabase = await createClient();
    const rawData = Object.fromEntries(formData.entries())
    const validatedFields = LoginSchema.safeParse({
        email:formData.get("email"),
        password:formData.get("password")
    })
    if(validatedFields.success){
        const {email,password} = validatedFields.data
        const {data,error} = await supabase.auth.signUp({email,password})
        if(error){
            return {success:false,message:error.message}
        }else{
            return{success:true}
        }
    }

}



export async function LoginAction(formData:FormData){

    const supabase = await createClient();
    const rawData = Object.entries(formData.entries())
    const validatedFields = LoginSchema.safeParse({
        email:formData.get("email"),
        password:formData.get("password")
    })
    
    if(validatedFields.success){
        const {email,password} = validatedFields.data
        const result = await supabase.auth.signInWithPassword({email,password})
        if(result.error){
            return {success:false,message:result.error.message}
        }else{
            return {success:true}
        }
    }

}