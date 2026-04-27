'use client'
import AddSub from "@/components/AddSub";
import Loading from "@/components/Loading";
import style from "@/ui/CustomAddSubButton.module.css"
import { createClient } from "@/utils/supabase/client";
import {  useState } from "react";

function CustomAddSubButton() {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState<null|boolean>(null);
    const [data, setData] = useState<any[]>([])
    const supabase = createClient();


    async function handleClick() {

        setShow(true)




        if (data.length == 0) {
            setLoading(true)
            const result = await supabase.from("sub_cat").select("*")
            if (result.data) {
                setData(result.data)
            }
            setLoading(false)

        }

    }

    return (
        <>
            <button onClick={handleClick} className={`${style.customShadow} bg-[var(--light-color)] rounded p-2  md:p-2 font-bold  hover:underline cursor-pointer hover:scale-[1.05] ease-in-out duration-300 md:hidden lg:block`}>Add Subscription</button>
            <button onClick={handleClick} className={`hidden ${style.customShadow} bg-[var(--light-color)] rounded p-2  md:p-2 font-bold  hover:underline cursor-pointer hover:scale-[1.05] ease-in-out duration-300 md:block lg:hidden `}>Add New Sub</button>
            {loading && <Loading></Loading>}
            {show && data.length > 0 && (
                <AddSub setShow={setShow} data={data}/>
            )}
            
        </>
        

    )

}





export default CustomAddSubButton;