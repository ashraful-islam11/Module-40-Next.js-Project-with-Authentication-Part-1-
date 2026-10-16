import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

  interface INewsHeading {
     id: string,
     title: string
  }


const MarqueePage =  async () => {
    const response = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await response.json();
    const newsHeading : INewsHeading[] = data.data ;
    // console.log('কি আছে এই হেডিং এ ',newsHeading);


    return (

        <div className="bg-red-800 ">

        <div className='mt-7 max-w-7xl mx-auto flex bg-red-800 text-white py-1'>
        
           <div  className="py-1 bg-red-700 font-bold text-white px-5">
               <h2 className=" ">সর্বশেষ </h2>
           </div>
      
             <MarqueeText  direction="right" duration={10}>
            {
                newsHeading.map( news => <Link href={`/newsDetails/${news.id}`} key={news.id}  className="hover:underline">
                 
                         <span>{ news.title}</span>
                        <span className="px-3 ">•</span>
                  
                       
                         </Link>)
                 
            }
             </MarqueeText>
           
             
         
            </div>
          </div>
    
    );
};
 export default MarqueePage;