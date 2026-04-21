import Navbar from "@/components/Navbar";
import style from "@/app/(auth)/layout.module.css"
import React from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function AuthLayout({children}:{children:React.ReactNode}) {

    async function isLoggedIn(){
        const supabase = await createClient();
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            return true
        }else{
            return false
        }

    }
    if(await isLoggedIn()){
        redirect("/dashboard")
    }

    return ( 
        <>
            
            <Navbar></Navbar>
            <section className={`${style.background} flex flex-1 justify-center items-center`}>
                {children}
            </section>
        </>
     );
}

export default AuthLayout;