
import { getSubCat } from "@/lib/getSubCat";
import SubscriptionData from "./SubscriptionData";


async function SubscriptionsPage({ data }: { data: any[] }) {
    const subCatData: any[] | null = await getSubCat()


    return (
        <>

            <section className=" flex justify-center items-center flex-1">

                <section className="bg-[var(--dark-color)] w-full p-2 mx-2 md:h-160 rounded flex flex-col customShadow overflow-hidden">
                    <h1 className="font-bold text-[var(--light-color)] text-center md:text-5xl my-2">
                        Subscriptions
                    </h1>


                    <div className="overflow-x-auto w-full">
                        <section className="grid grid-cols-[2fr_3fr_3fr_3fr_1fr_1fr] min-w-[800px] md:min-w-full items-center content-start gap-y-2 p-2 overflow-y-auto bg-[rgba(0,0,0,0.5)] md:h-160 rounded place-items-center justify-center text-[var(--light-color)] font-semibold">

                            <h1 className="font-bold md:text-2xl">Brand</h1>
                            <h1 className="font-bold md:text-2xl">Start Time</h1>
                            <h1 className="font-bold md:text-2xl">End Time</h1>
                            <h1 className="font-bold md:text-2xl">Remaining Time</h1>
                            <h1 className="font-bold md:text-2xl">Price</h1>
                            <h1 className="font-bold md:text-2xl">Controls</h1>

                            {data.map((item) => {
                                return <SubscriptionData subCatData={subCatData} key={item.id} item={item}></SubscriptionData>
                            })}
                        </section>
                    </div>
                </section>

            </section>

        </>
    );
}

export default SubscriptionsPage;