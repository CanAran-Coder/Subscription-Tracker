'use client'

import { format,intervalToDuration } from "date-fns"
import { enUS } from "date-fns/locale"
import { useState } from "react"
import ShowDelete from "./ShowDelete"
import Image from "next/image"
import ShowEdit from "./ShowEdit"



function SubscriptionData({ item,subCatData }: { item: any,subCatData:any[] }) {
    const [showEdit,setShowEdit] = useState(false)
    const [showDelete,setShowDelete] = useState(false)

    const startTime = format(item.start_date, "yyyy MMMM dd hh:mm", { locale: enUS })
    const endTime = format(item.end_date, "yyyy MMMM dd hh:mm", { locale: enUS })
    
    const duration = intervalToDuration({
        start: new Date(),
        end: new Date(item.end_date)
    })
    const isExpired = new Date() > new Date(item.end_date);
    const timeDiff = (isExpired 
        ? "Expired" 
        : `${duration.days || 0}D ${duration.hours || 0}H ${duration.minutes || 0}M Left`);




    return (<>
        {showEdit && <ShowEdit id={item.id} subCatData={subCatData} setShowEdit={setShowEdit}/>}
        {showDelete && <ShowDelete setShow={setShowDelete} id={item.id}/>}
        <div className="flex justify-center items-center gap-2 text-[var(--light-color)] font-semibold ">
            <Image src={item.sub_cat.logo} className=" customShadow  object-cover " alt="brandIcon" width={60} height={0}></Image>
            <p className="font-semibold md:text-lg">{item.sub_cat.name}</p>
        </div>

        <p className="font-semibold md:text-lg">{startTime}</p>
        <p className="font-semibold md:text-lg">{endTime}</p>
        <p className="font-semibold md:text-lg">{timeDiff}</p>
        <p className="font-semibold md:text-lg">{item.price}</p>
        <div className="w-full flex flex-1 h-full  justify-center items-center gap-1">
            <button onClick={()=> setShowEdit(true)} className="bg-green-400 rounded  w-full h-full cursor-pointer customShadow hover:brightness-125 ease-in-out duration-200">Edit</button>
            <button onClick={()=> setShowDelete(true)} className="bg-red-500 rounded  w-full customShadow h-full cursor-pointer hover:brightness-175 ease-in-out duration-200">Delete</button>


        </div>


    </>);
}

export default SubscriptionData;