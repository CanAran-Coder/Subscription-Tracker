'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { addSubscription } from "@/lib/addSub";
import toast from "react-hot-toast";
import { getSubscriptionById } from "@/lib/getSubscriptionById";
import { UpdateEdit } from "@/lib/UpdateEdit";


function ShowEdit({ setShowEdit, subCatData, id }: { setShowEdit: any, subCatData: any[], id: number }) {

    const [logoURL, setLogoURL] = useState<any>(null);
    const [mainData, setData] = useState<any>(null)
    useEffect(() => {
        async function getData(id: number) {
            const response = await getSubscriptionById(id)
            setData(response)
            setLogoURL(response.sub_cat.logo)
        }
        getData(id)


    }, [])

    async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {

        const { logo } = subCatData?.find((item) => item.name == e.target.value)
        if (logo) {
            setLogoURL(logo)
        }



    }


    function handleCross() {
        setShowEdit(false)
    }



    async function handleUpdate(formData:FormData){
        const result = await UpdateEdit(formData,id)
        if(result.success){
            toast.success("Subscription Updated!")
        }
        else{
            if(result.message){
                toast.error(result.message)
            }
            
        }
    }

    async function handleSubmit(formData: FormData) {
        const result = await addSubscription(formData)
        if (result.success) {
            toast.success("Subscription Added Successfully!")
        }
        else {
            if (result.message != undefined) {
                toast.error(result.message)
            }
        }
    }
    return (
        <>
            {mainData && <>

                <section className="bg-[rgba(0,0,0,0.7)] inset-0 w-screen h-screen fixed flex justify-center items-center">
                    <form action={handleUpdate} className="border-3 border-white md:w-150 md:h-170 rounded relative flex flex-col justify-center items-center md:px-20">
                        <RxCross1 onClick={handleCross} className="absolute top-5 right-5 bg-[var(--light-color)] rounded md:text-4xl cursor-pointer text-[var(--dark-color)]" />
                        <h1 className="md:text-3xl font-bold text-[var(--light-color)] mb-10">Add Subscription</h1>
                        <label className="text-[var(--light-color)] md:text-lg self-start font-bold">Category</label>
                        <div className="w-full bg-white rounded text-center flex">

                            <select defaultValue={mainData.sub_cat.name} name="brandName" onChange={handleChange} className="p-2 text-[var(--dark-color)] text-center w-[90%]">
                                {subCatData?.map((item) => {
                                    return <option className="text-[var(--dark-color)]" value={item.name} key={item.id}>{item.name}</option>
                                })}
                            </select>
                            <div className="w-[10%] flex flex-1 text-white relative">{logoURL && <Image src={logoURL} defaultValue={mainData.sub_cat.logo} fill alt="Subscription Brand Logo"></Image>} </div>

                        </div>

                        <label className="text-[var(--light-color)] md:text-lg self-start font-bold">Start Date</label>
                        <input defaultValue={mainData.start_date} type="datetime-local" name="startDate" className="w-full text-[var(--dark-color)] bg-white rounded text-center" />
                        <label className="text-[var(--light-color)] md:text-lg self-start font-bold">End Date</label>
                        <input defaultValue={mainData.end_date} name="endDate" type="datetime-local" className="text-[var(--dark-color)] w-full bg-white rounded text-center" />
                        <label className="text-[var(--light-color)] md:text-lg self-start font-bold">Price</label>
                        <input defaultValue={mainData.price} name="price" type="number" className="w-full text-[var(--dark-color)] bg-white rounded text-center" />
                        <button  className="w-full bg-[var(--light-color)] text-[var(--dark-color)]  p-2 rounded md:mt-3 hover:scale-[1.02] duration-300 ease-in-out cursor-pointer">Update</button>

                    </form>
                </section>


            </>}

        </>
    );
}

export default ShowEdit;