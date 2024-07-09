import React, { useEffect, useState } from 'react'
import NewsItem from '../NewsItem/NewsItem.jsx'




function Home() {
    const [articles, setArticles] = useState([]);
    const fetchData = async () =>{
        const URL = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8276e6b5404a4373b532af4c00b22ff8`//todo -- api key hide
        const reponse = await fetch(URL);
        const data = await reponse.json();
        console.log(data.articles[0].title);   
         setArticles(data.articles);
    }
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='w-full h-auto bg-[#f0c647] flex justify-evenly py-5 m-auto'>
      {
        articles.map((item)=>{
            <NewsItem title={item.title} description={item.description} image={item.imageUrl} authorName={item.urlToImage} />
        })
      }
    </div>
  )
}

export default Home