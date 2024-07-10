import React, { useEffect, useState } from 'react'
import NewsItem from '../NewsItem/NewsItem.jsx'

function Home({country, category, apiKey}) {
    const [articles, setArticles] = useState([]);
    const fetchData = async () =>{
        try {
        const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
        const reponse = await fetch(URL);
        const data = await reponse.json();
         setArticles(data.articles);
        } catch (error) {
          console.log("data not fetched!");
        }
    }
    useEffect(()=>{
        fetchData();
    },[category])

  return (
    <div className='w-full h-full flex justify-evenly py-5 m-auto'>
        <div className='w-[90%] h-auto flex md:flex-row flex-col flex-wrap justify-evenly items-center'>
        {
            articles.map((item)=>(
                <NewsItem key={item.title} title={item.title} description={item.description} image={item.urlToImage} newsUrl={item.url} authorName={item.author} />
            ))
          }
        </div>
    </div>
  )
}

export default Home