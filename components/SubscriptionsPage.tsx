import SubscriptionData from "./SubscriptionData";

function SubscriptionsPage({data}:{data:any[]}) {
    return ( 
        <>
        
            <section className=" flex justify-center items-center flex-1">

                <section className="bg-[var(--dark-color)] md:w-350 md:h-160 rounded flex flex-col">
                    <h1 className="font-bold text-[var(--light-color)] text-center md:text-5xl my-2">Subscriptions</h1>
                    <section className="flex items-center gap-2 flex-col border-2 border-white flex-1 p-2 overflow-y-scroll">
                        {data.map((item)=>{
                            return <SubscriptionData key={item.id} item={item}></SubscriptionData> 
                        })}
                    </section>
                </section>

            </section>
        
        </>
     );
}

export default SubscriptionsPage;