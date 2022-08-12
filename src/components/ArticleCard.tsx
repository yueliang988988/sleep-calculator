import React from 'react';

type ArticleCardProps = {
  title: string,
  description: string,
  datePublished: string,
  url: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({title, description, datePublished, url}) => {
  return (
    <div
      className='flex flex-col justify-start items-start gap-1 px-4 py-3 w-full
              bg-slate-300 rounded-md'
    >
      <h3
        className='text-xl font-semibold first-letter:capitalize'
      >
        {title}
      </h3>
      <p>
        {description}
      </p>
      <p
        className="text-sm text-gray-500"
      >
        {datePublished} --- <u>{url}</u>
      </p>
    </div>
  )
}

export default ArticleCard