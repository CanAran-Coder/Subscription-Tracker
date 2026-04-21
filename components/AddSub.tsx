'use client'

import Image from "next/image";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
 function AddSub({data}:{data:any[]}) {

    const [logoURL,setLogoURL] = useState(null);

        function handleChange(e:React.ChangeEvent<HTMLSelectElement>){
            const {logo} = data.find((item) => item.name == e.target.value)
            if(logo){
                setLogoURL(logo)
            }
            
        }
    return (
        <>

            <section className="bg-[rgba(0,0,0,0.7)] inset-0 w-screen h-screen fixed flex justify-center items-center">
                <form className="border-3 border-white md:w-150 md:h-170 rounded relative flex flex-col justify-center items-center md:px-20">
                    <RxCross1 className="absolute top-5 right-5 bg-[var(--light-color)] rounded md:text-4xl cursor-pointer" />
                    <h1 className="md:text-3xl font-bold text-[var(--light-color)] mb-10">Add Subscription</h1>
                    <label className="text-[var(--light-color)] md:text-lg self-start font-bold">Category</label>
                    <div className="w-full bg-white rounded text-center flex">

                        <select onChange={handleChange} className="p-2 text-center w-[90%]"> 
                            {data.map((item)=>{
                                return <option value={item.name} key={item.id}>{item.name}</option>
                            })}
                        </select>
                        <div className="w-[10%] flex flex-1 text-white relative">{logoURL && <Image src={logoURL} fill alt="Subscription Brand Logo"></Image>} </div>

                    </div>

                    <label className="text-[var(--light-color)] md:text-lg self-start font-bold">Start Date</label>
                    <input type="datetime-local" name="startDate" className="w-full bg-white rounded text-center" />
                    <label className="text-[var(--light-color)] md:text-lg self-start font-bold">End Date</label>
                    <input name="endDate"  type="datetime-local" className="w-full bg-white rounded text-center" />
                    <label className="text-[var(--light-color)] md:text-lg self-start font-bold">Price</label>
                    <input name="price" type="number" className="w-full bg-white rounded text-center" />
                    

                </form>
            </section>

        </>
    );
}

export default AddSub;