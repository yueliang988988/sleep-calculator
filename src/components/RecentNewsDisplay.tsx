import React from 'react';
import { trpc } from '../utils/trpc';
import {dummyData} from '../utils/fakeNews';
import ArticleCard from './ArticleCard';
import LoadingNews from './LoadingNews';


const RecentNewsDisplay: React.FC = () => {

  const {data, isLoading, error} = trpc.useQuery(["example.hello"], {
    staleTime: Infinity, 
  });

  if (isLoading) return <LoadingNews />

  return (
      <div
        className='flex flex-col justify-start items-start gap-4 p-2 w-full'
      >
        {data.value.map( (article: { title: string; description: string; datePublished: string; url: string; }) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            description={article.description}
            datePublished={article.datePublished}
            url={article.url}
          />
        ))}
      </div>
  )
}

export default RecentNewsDisplay