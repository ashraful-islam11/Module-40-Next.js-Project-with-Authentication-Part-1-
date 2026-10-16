import Link from "next/link";

interface INavLinksType {
      slug: string,
      title: string,
      topicId: null | string,
      url: string,
      scrapable: boolean

}
const NavLinks = async () => {

    const response  = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await response.json();
    const navData  : INavLinksType[] = data.data;
    // console.log(navData);


    const filterNav = navData.filter( nav => nav.scrapable)

    return (
        <nav>

            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <Link  href="/">
                <h3 className=" hover:text-red-600 text-sm font-400 ">হোম</h3>
                </Link>
                {   
                    filterNav.map( (nav, index) => <Link className=" hover:text-red-600  text-sm font-400 " key={index}  href = {`/categorys/${nav.slug}`}>
                        
                        {
                            nav.title
                        }
                    </Link>)
                }
                
            </div>

            
        </nav>
    );
};

export default NavLinks;