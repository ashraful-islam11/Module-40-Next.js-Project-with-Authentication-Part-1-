import MainNews from "@/components/main-news";
import MostRead from "@/components/MostRead";
import OthersNews from "@/components/OthersNews";


import { Suspense } from "react";


const Home = ()=>  {
  
  return (
       <div>
         

      {/* main section :  */}
          <section className="grid grid-cols-3 max-w-7xl mx-auto gap-2 mt-4 px-3 items-start" >
    {/* main new : left site :  */}
            <div className="  col-span-2 ">
                   <Suspense fallback={<span className="loading loading-spinner text-warning text-center"></span>}>

                  <MainNews />
                  {/* <SelectedNews></SelectedNews> */}
                  <OthersNews />
                  
                   </Suspense>

              
            </div>

        {/* others news : right site .  */}
            <div className=" p-6 col-span-1  bg-base-100  shadow-sm ">
                <Suspense fallback ={ <div className="text-center ">
                  <span className="loading loading-spinner text-warning text-center"></span>
                </div>}>
                <MostRead></MostRead>

                </Suspense>
              
            </div>
            


          </section>


       </div>
  );
}


export default  Home ;