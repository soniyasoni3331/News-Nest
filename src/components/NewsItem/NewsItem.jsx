import React from 'react'

function NewsItem({description, title, image, authorName, newsUrl}) {
  return (
    <div className='w-[80%] md:w-1/5 md:h-[350px] h-auto md:m-2 m-8 border border-gray-400 shadow-md shadow-slate-900 bg-black text-white rounded-md hover:scale-105 hover:duration-200 hover:bg-[#f7ba02] hover:text-black'>
            <img className='w-full h-1/3 rounded-t-md' src={image?image:image="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/08/breakingnews-live-blog-1568185450-1595123397-1596503780.jpg"} alt="news" />
            <div className='flex flex-col md:gap-y-2 gap-y-6 md:p-2 p-4 '>
                <h5 className='font-bold md:text-xl text-7xl leading-snug line-clamp-5 md:line-clamp-3'>{title}</h5>
                <p className='md:text-sm text-5xl leading-snug text-gray-600 line-clamp-5 md:line-clamp-3'>{description? description :`To Read more about this news article click to "Read more" given below. Happy reading`}</p>
                <a href={newsUrl} target='_blank' className='md:text-sm text-4xl cursor-pointer text-gray-600' >Read more</a>
                <p className='md:taxt-md text-6xl align-text-bottom'>{authorName? authorName : "Unknown"}</p>
            </div>
        </div>
  )
}

export default NewsItem