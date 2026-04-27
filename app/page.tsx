import style from "@/app/page.module.css"
import Navbar from "@/components/Navbar";
import Link from "next/link";

function Home() {
  return ( 
    <>
    
      <div className={`${style.background} h-screen w-full flex flex-col`}>
        <Navbar></Navbar>
        <div  className="flex flex-1  justify-center items-center">
          <div className="flex flex-col bg-[rgba(0,0,0,0.5)] rounded p-2 md:h-150 aspect-video justify-center items-center gap-3">
            <h1 className="text-[var(--light-color)] font-bold md:text-5xl text-center">Subscription Tracker</h1>
            <h2 className="text-[var(--light-color)] font-bold md:text-3xl text-center">Manage Your Billings And Save Your Money</h2>
            <Link href={"/login"} className="text-[var(--dark-color)] bg-[var(--light-color)] font-bold md:text-3xl text-center p-2 rounded hover:scale-[1.1] ease-in-out duration-300 my-3">Start Now!</Link>

          </div>
          
        </div>
      </div>

    
    </>
   );
}

export default Home;