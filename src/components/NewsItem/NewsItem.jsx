import React from 'react'

function NewsItem({description, title, image, authorName, newUrl}) {
  return (
    <div className='w-1/5 h-[380px] m-2 border border-gray-400 shadow-md shadow-slate-900 bg-black text-white rounded-md hover:scale-105 hover:duration-200 hover:bg-[#f7ba02] hover:text-black'>
        
            <img className='w-full h-1/3 rounded-t-md' src={image?image:image="https://cdn.ndtv.com/common/images/ogndtv.png"} alt="news" />
            <div className='flex flex-col gap-y-2 p-2'>
                <h5 className='font-bold text-xl line-clamp-4'>{title}</h5>
                <p className='text-sm text-gray-600 line-clamp-3'>{description}...</p>
                <a href={newUrl} className='text-sm text-gray-600' >Read more</a>
                <p>{authorName? authorName : "Unknown"}</p>
            </div>
        </div>
  )
}

export default NewsItem