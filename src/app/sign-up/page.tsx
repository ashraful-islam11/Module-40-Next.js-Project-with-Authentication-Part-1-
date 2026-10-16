'use client'


import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";




const SignUpPage = () => {

    const handleSignUp = async (e : React.SubmitEvent<HTMLElement>) => {
        e.preventDefault() ;

        const formData = new FormData(e.target) 
        const user  = Object.fromEntries(formData.entries()) as {name : string, password:string, email:string, image:string, callbackURL:string}
        

        const {data, error} = await signUp.email({
            ...user,
            callbackURL: "/"
        })

        if(data){
            console.log(data);
            redirect("/")
        }else{
            console.log(error);
        }

    }




    return (
        <section className="my-10 max-w-7xl  " >
            <h1 className="text-blue-700 text-2xl font-bold text-center">Please Sign Up : </h1>


            <div className=" flex justify-center">
                <form className=" " onSubmit={handleSignUp}>
                      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4  my-5">
    

                        <label className="label">নাম</label>
                        <input type="text" name = "name" className="input w-md " placeholder="Enter your name : " />

                        <label className="label">Image</label>
                        <input type="text" name="image" className="input w-md " placeholder="Enter your name : " />

                        <label className="label"> ইমেইল</label>
                        <input type="email" name = "email" className="input w-md " placeholder="Enter your email " />

                        <label className="label"> পাসওয়ার্ড  </label>
                        <input type="password" name = "password" className="input w-md " placeholder=" Enter you password" />

                        <button type="submit" className="btn bg-red-800 text-white font-bold  mt-4 w-md ">সাইন আপ করুন</button>
                        </fieldset>

                </form>
              
            </div>
            
        </section >
    );
};

export default SignUpPage;