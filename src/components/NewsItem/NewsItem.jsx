import React from 'react'

function NewsItem() {
  return (
    <div className='w-1/4 h-[350px] border border-yellow-400 bg-yellow-300 rounded-sm'>
        <div>
            <img src="" alt="" />
            <div>
                <h5 >title</h5>
                <p>description</p>
                <a href="#">go somewhere</a>
                <p>author name</p>
            </div>
        </div>
    </div>
  )
}

export default NewsItem