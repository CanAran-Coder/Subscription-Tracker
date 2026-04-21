'use client'
import style from "@/ui/CustomLogoutButton.module.css"
import { createClient } from "@/utils/supabase/client";
function CustomLogoutButton() {

    async function handleClick(){
        const supabase = createClient();
        const result = await supabase.auth.signOut();
    }

    return ( 

        <>
        
            <button onClick={handleClick} className={`${style.customShadow} bg-[var(--light-color)] rounded md:p-2 font-bold hover:underline cursor-pointer hover:scale-[1.1] ease-in-out duration-300`}>Logout</button>
        
        </>

     );
}

export default CustomLogoutButton;