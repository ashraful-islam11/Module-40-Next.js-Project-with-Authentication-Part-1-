 "use client"
import {  signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";

const UserInformation = () => {
    const { data: session } = useSession(); 
    
    const user = session?.user;
    // console.log(user);

    const handleSignOut = async () => {
        await signOut();
        redirect("/sign-in")
    }
    return (
        <div>
            {user ? (
                <section>
                <Link href={'/profile'}>
                   <div className="avatar flex justify-center mb-2">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                        <img alt="Tailwind-CSS-Avatar-component" src={user?.image } />
                    </div>  
                </div>
                <div className=" flex gap-2">
                     <h2 className =" font-bold text-xl bg-linear-to-r from-pink-700 to-green-600 text-transparent bg-clip-text -webkit-bg-clip-text">{user?.name}</h2>
                   
                    </div>
                      </Link>
                      <div className="mt-2 text-center">

                          <button onClick={handleSignOut} className="btn btn-error btn-sm ">sign out</button>
                      </div>
              
                
               
                </section>
            ) : (
                <div>
                    <div className="flex items-center justify-center gap-2">
                       <Link href={"/sign-up"}>
                             <button  className="btn">সাইন আপ</button> 
                       </Link>
                       <Link href={"/sign-in"}>
                        <button className="btn bg-[#c10007] text-white">সাইন ইন</button> 
                       </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserInformation;