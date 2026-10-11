import Image from "next/image";

interface IAllSElectedType {
    category: string,
    title: string, 
    description: string,
    id: string,
    imageUrl: string, 
    imageAlt: string

}

const SelectedNews = async() => {

    const response = await fetch("https://news-api-v2.vercel.app/api/news/sections");
    const data = await response.json();
    // console.log(allMainNews);

  
    const selectedNews = data.data[1];
    console.log('our selected news ', selectedNews);
    const allSelectedNews : IAllSElectedType[]= selectedNews.articles ; 
    console.log('our all selected news ', allSelectedNews);

    return (
        <section  className="mb-3 px-3 ">
            <div>
                <h2 className="font-bold text-xl text-[#171717] ">নির্বাচিত খবর</h2>
                 <div className="divider divider-secondary"></div>
            </div>

            <div className="grid grid-cols-3 gap-2 px-3">
                {
                    allSelectedNews.map( news => <div key= {news.id}>

                           <div className="card bg-base-100  shadow-sm ">
                                <figure>
                                    <Image src={news.imageUrl} alt={news.imageAlt} width={500} height={500}></Image>
                                </figure>
                                <div className="card-body">
                                    <p className="font-semibold text-red-500 text-sm ">{news.category}</p>
                                    <h2 className="  text-[16px] font-semibold">{news.title}</h2>

                                    <p className="text-sm text-[#99a1af]"> {news.description}</p>
                                    
                                </div>
                            </div>
                         </div>)
                }
            </div>




            
        </section>
    );
};

export default SelectedNews;