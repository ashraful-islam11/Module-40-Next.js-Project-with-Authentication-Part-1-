
import NewsCard, { INewsCardType } from '@/components/NewsCard';

import { Suspense } from 'react';

const CategoryContent = async ({ params } : {  params: Promise<{ categorysId: string }>} ) => {

    const { categorysId } = await params;
    const response = await fetch(`https://news-api-v2.vercel.app/api/category/${categorysId}`)
    const data = await response.json() ;
    console.log("hey bro how are you  ",data);
    
    const newsData : INewsCardType[]  = data.data ;
    console.log('news data ', newsData);


    return (
        <section className='mt-3 ' >

            <div className='mb-3 '>
                <h2 className='text-xl font-bold border-b-2 border-red-500 py-2'>{data.title}</h2>
            </div>
           
            
                 <div className='grid grid-cols-3 gap-3 '>
                {
                  newsData.map( (news, index: number) => <NewsCard key={index} news= {news}></NewsCard>)  
                }
            </div>
        



        </section>
    );
};

const CategoryPage = ({ params } : { params: Promise<{ categorysId: string }>}) => {
    return (
        <Suspense fallback={
        <div className='text-center'>
            <span className="loading loading-spinner text-success text-center"></span>
        </div>}>
            <CategoryContent params={params} />
        </Suspense>
    );
};

export default CategoryPage;
