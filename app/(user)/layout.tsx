import Navbar from "@/components/Navbar";

function userLayout({ children }: { children: any }) {
    return (<>

       
            <Navbar />
            {children}
        


    </>);
}

export default userLayout;