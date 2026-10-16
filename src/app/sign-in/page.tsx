"use client"

import { authClient, signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
   const handleSignIn = async( e: React.SubmitEvent<HTMLElement>)=> {
      e.preventDefault() ;

      const formData = new FormData(e.target) ;
      const user =  Object.fromEntries(formData.entries()) as {email: string, password : string}
      console.log(user)

      const {data, error} = await signIn.email({
            ...user,
            callbackURL: "/"

      })

      if( data){
        console.log(data);
        toast.success('sign-in successful')
      }
      else{
        toast.error('sign-in failed');
        console.log(error);
      }

   }

    const handleSignInWithGoogle = async ()=> {
         const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const handleSignInWithGithub = async () => {
        const resData = await authClient.signIn.social({
             provider: "github"
        })
        console.log('aveter image keno ashe na', resData)
    }
   
   
   

    return (
        <section className="max-w-7xl my-10 " >
            <h2 className="text-2xl font-bold text-blue-900 text-center">সাইন ইন </h2>

            <div className="my-5   [border-image:linear-gradient(to_right,#ec4899,#a855f7,#6366f1)_1]">
                <form onSubmit={handleSignIn} >

                <fieldset className="fieldset bg-base-200  border-blue-800 rounded-box w-xs border p-4 py-6 mx-auto ">
                  

                    <label className="label w-md">ইমেইল</label>
                    <input name="email" type="email" className="input w-md" placeholder="Email" />

                    <label className="label w-md">পাসওয়ার্ড </label>
                    <input name="password" type="password" className="input w-md" placeholder="Password" />

                    <button type='submit' className="btn bg-linear-to-r from-[#40186499] to-[#6366f1] text-white  w-md mt-4">সাইন ইন করুন </button>
                </fieldset>
              </form>

              <div className =" flex justify-center gap-2 mt-2.5  ">
                 <button onClick={handleSignInWithGoogle} className="btn">signIn with google</button>
                 <button onClick={handleSignInWithGithub} className="btn">signIn with github</button>
              </div>
            </div>
        </section >
    );
};

export default SignInPage;