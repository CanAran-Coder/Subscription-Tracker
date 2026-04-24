'use client'
import style from "@/components/Navbar.module.css"
import CustomLogoutButton from "@/ui/CustomLogoutButton";
import CustomRedirectButton from "@/ui/CustomRedirectButton";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import CustomAddSubButton from "@/ui/CustomAddSubButton";
import { useRouter } from "next/navigation";

function Navbar() {
    const navigate = useRouter();

    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();
    useEffect(() => {

        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user)
            setLoading(false)
        }
        checkUser();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null)
            setLoading(false)
        })

        return () => {
            authListener.subscription.unsubscribe();
        }



    }, [])


    function handleLogoClick(){

        navigate.push("/")
        


    }


    if(loading){
        return <Loading/>
    }
    return (
        <>

            <nav className={`${style.customShadow} md:h-15 bg-[var(--dark-color)] grid grid-cols-3`}>
                <section className="banner flex items-center justify-start mx-3 gap-2">
                    <div onClick={handleLogoClick} className="w-20 cursor-pointer h-[75%] relative p-2">
                        <Image  src={"/logo.jpg"} alt="picture of the logo" className="rounded" fill priority></Image>
                    </div>
                    <h1 className="text-[var(--light-color)] font-bold md:text-xl">Subscription Tracker</h1>
                </section>
                <section className="options flex justify-center items-center gap-2">

                    {user && (
                        
                        <>
                            <CustomRedirectButton href="/dashboard">Dashboard</CustomRedirectButton>
                            <CustomRedirectButton href="/subscriptions">Subscriptions</CustomRedirectButton>
                            <CustomAddSubButton/>
                        </>
                
                        
                
                ) }


                </section>
                <section className="auth flex items-center justify-end mx-3 gap-2">

                    {user ? <CustomLogoutButton/> : (
                        <>
                            <CustomRedirectButton href="/login">Login</CustomRedirectButton>
                            <CustomRedirectButton href="/register">Register</CustomRedirectButton>
                            
                        </>
                       

                    )}


                </section>
            </nav>

        </>
    );
}

export default Navbar;