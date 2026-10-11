import Image from "next/image";
import Link from "next/link";

interface IOtherNewsCardType {
    imageUrl : string,
    imageAlt : string,
    description: string, 
    category: string, 
    title : string, 
    id : string ,
   

}
interface IAllData {
    articles: IOtherNewsCardType[],
    title: string,
    count: number
}
const OthersNews = async  () => {

    const response = await fetch("https://news-api-v2.vercel.app/api/news/sections");
    const data = await response.json();
    const allData : IAllData[] = data.data;
    


    // console.log('other data ',  allData);
    return (
        <section className="px-3">
            <div>
                {  
                   allData.slice(1)
                   .filter( (item) => item.count != 1 && item.count !=6)
                   .map( (allNews  ,index :number) => <div key={index}>
                            <h2 className="text-[18px] font-semibold text-[#171717] border-b-2 border-rose-500 py-2 mb-3" >{allNews.title} </h2>

                            <div className="grid grid-cols-3 gap-2.5 ">
                                {
                                    allNews.articles.map( (news ) => <div key={news.id}>

                                        <Link href={`/newsDetails/${news.id}`}>
                                              <div className="card bg-base-100  shadow-sm ">
                                            <figure>
                                                <Image src={news.imageUrl} alt={news.imageAlt} width={500} height={500}></Image>
                                            </figure>
                                            <div className="card-body">
                                                <p className="font-semibold text-red-500 text-sm ">{news.category}</p>
                                                <h2 className="  text-[16px] font-semibold  line-clamp-3 min-h-18">{news.title}</h2>
            
                                                <p className="text-sm text-[#99a1af] line-clamp-2"> {news.description}</p>
                                                
                                            </div>
                                        </div>
                                        </Link>

                                    </div>)
                                }
                            </div>
                   </div>)
                }
            </div>
        </section>
    );
};

export default OthersNews;