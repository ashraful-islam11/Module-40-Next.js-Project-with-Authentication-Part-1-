import Link from "next/link";

interface IMostReadType {
    rank: number,
    title: string,
    id: number
}

const MostRead = async() => {

    const response = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await response.json();
    const mostReadNews : IMostReadType[] = data.data ;
 

    return (
        <section className=''>
            <div>
                <h1 className='text-[18px] text-[#171717] font-bold '>সর্বাধিক পঠিত </h1>
            </div>
            <div className='card   bg-base-100'>
                {
                    mostReadNews.map( news=>
                        <Link href={`/newsDetails/${news.id}`} key={news.rank}>
                        <div  className='flex gap-3 py-4  items-center '> 

                           <p className='text-red-500 text-xl font-bold '>{news.rank}</p>
                           <h2 className='text-[16px] hover:text-red-500'> {news.title}</h2>

                    </div>
                    
                        </Link> 
                    )
                    
                }
            </div>
            
        </section>
    );
};

export default MostRead;