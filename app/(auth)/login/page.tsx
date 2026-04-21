'use client'

import { LoginAction } from "@/auth/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function Login() {
    const router = useRouter();

    async function handleSubmit(formData:FormData){

        const result = await LoginAction(formData)
        if(result?.success){
            toast.success("Login Successfully!")
            router.push("/dashboard")
        }
        else{
            if(result?.message != undefined){
                toast.error(result.message)
            }
            else{
                toast.error("Unexpected Error!")
            }
        }

    }


    return ( <>

        <form action={handleSubmit} className="bg-[rgba(0,0,0,0.4)] flex  md:w-150 md:h-150 md:border-2 border-[var(--light-color)] justify-center items-center rounded flex-col md:px-20 md:pb-18">
                <h1 className="md:text-3xl font-bold text-[var(--light-color)] mb-10">Login</h1>
                <label className="text-[var(--light-color)] md:text-lg self-start font-bold">E-Mail</label>
                <input name="email" className="w-full bg-white rounded text-center"/>
                <label className="text-[var(--light-color)] md:text-lg self-start font-bold">Password</label>
                <input type="password" name="password" className="w-full bg-white rounded text-center"/>
                <button className="bg-[var(--light-color)] rounded font-bold md:text-lg md:px-4 py-2 hover:scale-[1.02] ease-in-out duration-300 cursor-pointer w-full mt-3">Login</button>
           

        </form>

    </> );
}

export default Login;