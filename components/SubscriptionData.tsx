function SubscriptionData({item}:{item:any}) {
    return ( <>
    
        <section className="bg-gray-600 w-full md:h-10 rounded grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center text-[var(--light-color)] font-semibold">
            <div className="flex justify-center items-center gap-2">
                <img src={"..."}></img>
                <p className="border-r pr-4">{item.sub_cat.name}</p>
            </div>
            
            <p className="text-sm">Starts:{item.start_date}</p>
            <p>Ends:{item.end_date}</p>
            <p>Time Left:{item.end_date - item.start_date}</p>
            <p>Price:{item.price}</p>
            <button>Edit</button>
            <button>Delete</button>
        </section>

    </> );
}

export default SubscriptionData;