
import style from "@/ui/CustomRedirectButton.module.css"
import Link from "next/link";

function CustomRedirectButton({children,href}:{children:any,href:string}) {
    return ( 
        <>
        
                <Link href={href} className={`${style.customShadow} bg-[var(--light-color)] rounded md:p-2 font-bold hover:underline cursor-pointer hover:scale-[1.05] ease-in-out duration-300`}>{children}</Link>
        
        </>
     );
}

export default CustomRedirectButton;