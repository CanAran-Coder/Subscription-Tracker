'use client'
import { SubscriptionDelete } from "@/lib/SubscriptionDelete";
import toast from "react-hot-toast";
function ShowDelete({ setShow, id }: { setShow: any, id: number }) {


    async function handleYes() {
        const result = await SubscriptionDelete(id)
        if (result.success) {
            toast.success("Subscription Deleted!")
            setShow(false)
        }
        else {
            if (result.message != undefined) {
                toast.error(result.message)
            }
        }
    }

    return (

        <>


            <div className="bg-[rgba(0,0,0,0.5)] inset-0 fixed w-screen h-screen flex justify-center items-center">

                <div className="bg-[var(--light-color)] md:w-150 h-40 rounded customShadow flex  gap-2 justify-center items-center">
                    <h1 className="text-center text-[var(--dark-color)] md:text-xl">Are you sure want to delete?</h1>
                    <button onClick={handleYes} className="bg-green-400 rounded md:py-2 md:px-5 cursor-pointer hover:brightness-125 ease-in-out duration-200">Yes</button>
                    <button onClick={() => setShow(false)} className="bg-red-500 rounded md:py-2 md:px-5 cursor-pointer hover:brightness-175 ease-in-out duration-200">No</button>

                </div>



            </div>


        </>
    );
}

export default ShowDelete;