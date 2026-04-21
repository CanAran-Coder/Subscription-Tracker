
import SubscriptionData from "./SubscriptionData";


function SubscriptionsPage({ data }: { data: any[] }) {



    return (
        <>
            
            <section className=" flex justify-center items-center flex-1">

                <section className="bg-[var(--dark-color)] md:w-350 md:h-160 rounded flex flex-col customShadow">
                    <h1 className="font-bold text-[var(--light-color)] text-center md:text-5xl my-2">Subscriptions</h1>
                    <section className=" items-center grid content-start gap-y-2 grid-cols-[2fr_3fr_3fr_3fr_1fr_1fr] p-2 overflow-y-auto  bg-[rgba(0,0,0,0.5)] w-full h-160 rounded place-items-center  justify-center text-[var(--light-color)] font-semibold">

                        <h1 className="font-bold md:text-2xl">Brand</h1>
                        <h1 className="font-bold md:text-2xl">Start Time</h1>
                        <h1 className="font-bold md:text-2xl">End Time</h1>
                        <h1 className="font-bold md:text-2xl">Remaining Time</h1>
                        <h1 className="font-bold md:text-2xl">Price</h1>
                        <h1 className="font-bold md:text-2xl"> Controls</h1>
                        {data.map((item) => {
                            return <SubscriptionData key={item.id} item={item}></SubscriptionData>
                        })}
                    </section>
                </section>

            </section>

        </>
    );
}

export default SubscriptionsPage;