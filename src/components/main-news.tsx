import Image from 'next/image';
import Link from 'next/link';
interface IAllMainNewsType {
    category: string,
    title: string,
    id: number

}

const MainNews = async () => {

    const response = await fetch("https://news-api-v2.vercel.app/api/news/sections");
    const data = await response.json();
    // console.log(allMainNews);

  
    const mainNews = data.data[0]; 
    // console.log('প্রব্লেম সল্ভে করতে হবে,', mainNews);


    const allMainNews : IAllMainNewsType[] = mainNews.articles; 
    // console.log('all main news এই জায়গায়', allMainNews);
  


    const mainNewsArticles = mainNews.articles[0];
    // console.log( 'মিলে কিনা দেখি ',mainNewsArticles);
    const { description, title, category, imageUrl,imageAlt,id } = mainNewsArticles ;
    // console.log(mainNewsArticles);



    return (
         <section className='flex gap-2 mb-10'>
                  {/* first news : left site :  */}
                  <Link href={`/newsDetails/${id}`}>
                    <div className="card bg-base-100 w-100 shadow-sm">
                        <figure>
                            <Image src={imageUrl} alt={imageAlt} width={600} height={600} ></Image>
                        </figure>
                        <div className="card-body">
                            <p className='text-red-500 font-semibold '>{category}</p>
                            <h2 className="card-title font-bold text-xl "> {title}</h2>
                            <p className='text-gray-400 text-sm '>{description}</p>
                            
                        </div>
                    </div>
                  </Link>

                {/* others news : */}
                <div className='card bg-base-100 w-100 shadow-sm  '>
                    
                    <div className=' '>
                        {
                          allMainNews.slice(1,5).map( (newsHeading, index : number) => 
                                <Link  key={index} href ={`/newsDetails/${newsHeading.id}`}>
                                  <div 
                          className=' shadow-sm border border-gray-200 px-3 py-5 hover:bg-gray-100'>
                            <p className='text-red-500 font-semibold'>{category}</p>
                            <h2>{newsHeading.title}</h2> 

                                </div>
                                </Link>
                                )
                                
                                
                            
                           
                        
                        }
                    </div>

                </div>
                




         </section>

    );
};

export default MainNews;
