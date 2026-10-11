
import Image from 'next/image';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

interface ITagsType {
  tags: string[];
  title: string;
  firstPublished: string;
  body: {
    type: string;
    url: string;
    text: string;
  }[];
}

const NewsDetailsContentPage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const response = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();
  const newsData: ITagsType | undefined = data.data;

  if (
    !newsData ||
    !Array.isArray(newsData.body) ||
    newsData.body.length < 3 ||
    typeof newsData.body[2]?.text !== 'string' ||
    !Array.isArray(newsData.tags)
  ) {
    notFound();
  }

  const date = new Date(newsData.firstPublished);

  const banglaDate = date.toLocaleDateString('bn-BD', {
    dateStyle: 'full',
    timeZone: 'Asia/Dhaka',
  });

  const newsDataBody = newsData.body;

  return (
    <section className="max-w-4xl mx-auto">
      <div className="my-5">
        <h1 className="text-3xl font-bold text-[#171717]">
          {newsData.title}
        </h1>

        <p className="text-[#737373] text-sm my-5 py-2 border-y border-[#737373]">
          {banglaDate}
        </p>

        <div className="mt-5">
          {newsDataBody[2].text
            .split('\n')
            .slice(1)
            .map((text: string, index: number) => (
              <p
                className="text-[18px] text-[#525252]"
                key={index}
              >
                {text}
              </p>
            ))}
        </div>

        <div>
          {newsDataBody.map((newsObj, index: number) => (
            <div key={index}>
              {newsObj.url ? (
                <>
                  <Image
                    src={newsObj.url}
                    alt={newsObj.type}
                    width={600}
                    height={600}
                    className="w-full h-auto my-5 object-center"
                  />

                  <p className="text-[18px] text-[#525252]">
                    {newsObj.text}
                  </p>
                </>
              ) : (
                <p className="text-[18px] text-[#525252]">
                  {newsObj.text}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-5 my-5">
          {newsData.tags.map((tag, index: number) => (
            <button
              className="btn rounded-3xl text-sm text-[#737373]"
              key={index}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsDetailsPage = ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  return (
    <div>
      <Suspense>
        <NewsDetailsContentPage params={params} />
      </Suspense>
    </div>
  );
};

export default NewsDetailsPage;
