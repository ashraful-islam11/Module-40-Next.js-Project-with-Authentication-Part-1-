
 'use client'
import {  authClient } from '@/lib/auth-client';
import { useState } from 'react';
import toast from 'react-hot-toast';


const profilePage = () => {
    const { data: session } = authClient.useSession(); 
        
        const user = session?.user;
      
         const [showProfile, setShowProfile ] = useState(false)
        const handleUpdateProfile =  async (e: React.SubmitEvent<HTMLElement>)=> {
            e.preventDefault() ;

            const formData = new FormData(e.target)
            const data = Object.fromEntries(formData.entries()) as { name:string , image:string}

                 await authClient.updateUser({
                    ...data
                })

                if(data){
                    toast.success('successful you profile update')
                }
               
      
  
        }


      const showUpdateProfileFrom = ()=> {
          
            setShowProfile( !showProfile)
      }
       


    return (
        <section className='grid justify-center mt-5'>
         <div>

       
            <div className="avatar flex justify-center mb-2 ">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                        <img alt="Tailwind-CSS-Avatar-component" src={user?.image } />
                    </div>  
                </div>
                <div className="">
                     <h2 className ="text-center font-bold text-xl bg-linear-to-r from-pink-700 to-green-600 text-transparent bg-clip-text -webkit-bg-clip-text">{user?.name}</h2>
                     <p className ="text-center bg-linear-to-r from-green-500 to-red-600 bg-clip-text text-transparent -webkit-bg-clip-text   ">{user?.email}</p>
                    </div>

                    <div  className =" flex justify-center my-2">
                         <button onClick={showUpdateProfileFrom} className="btn btn-error btn-sm ">Update Profile</button>
                    </div>
            </div>


            <div>
               {
                   showProfile ?  <div>  <form onSubmit={handleUpdateProfile} >
                      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4  my-5">
    

                        <label className="label">নাম</label>
                        <input type="text" name = "name" className="input w-md " placeholder="Enter your name : " />

                        <label className="label">Image</label>
                        <input type="text" name="image" className="input w-md " placeholder="Enter your name : " />


                      

                        <button type="submit" className="btn bg-red-800 text-white font-bold  mt-4 w-md ">update </button>
                        </fieldset>

                </form></div> : <div></div>
               }
              
            </div>

            
        </section>
        
    );
};

export default profilePage;