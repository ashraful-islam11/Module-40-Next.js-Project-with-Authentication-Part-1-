import Image from 'next/image';
import Link from 'next/link';

export interface INewsCardType {
    imageUrl : string,
    imageAlt : string, 
    category: string,
    description: string,
    title: string,
    id:string
}

const NewsCard = ({ news } : { news : INewsCardType }) => {
    return (
        <section>
            {/* group এবং overflow-hidden যোগ করা হয়েছে */}
             <Link href={`/newsDetails/${news.id}`}>
             
            <div className="card bg-base-100 shadow-md h-full hover:cursor-pointer group overflow-hidden">
                <figure className="overflow-hidden">
                    <Image 
                        src={news.imageUrl} 
                        alt={news.imageAlt} 
                        className="h-62.5 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                        width={500} 
                        height={500} 
                    />
                </figure>
                <div className="card-body">
                    <p className="font-semibold text-red-500 text-sm">{news.category}</p>
                    <h2 className="text-[16px] font-semibold hover:text-red-800">{news.title}</h2>
                    <p className="text-sm text-[#99a1af]">{news.description}</p>
                </div>
            </div>
             </Link>
        </section>
    );
};

export default NewsCard;