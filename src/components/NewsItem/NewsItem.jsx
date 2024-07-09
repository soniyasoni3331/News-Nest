import React from 'react'

function NewsItem({description, title, image, authorName}) {
  return (
    <div className='w-1/5 h-[300px] border border-black bg-black text-white rounded-md hover:scale-105 duration-150'>
        <div className='flex flex-col justify-between items-center'>
            <img src={image} alt="news" />
            <div>
                <h5>{title}</h5>
                <p>{description}</p>
                <a href="#">go somewhere</a>
                <p>{authorName}</p>
            </div>
        </div>
    </div>
  )
}

export default NewsItem