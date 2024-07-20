import React, { useEffect, useState } from 'react'
import NewsItem from '../NewsItem/NewsItem.jsx'

function Home({country, category, apiKey}) {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const fetchData = async () =>{
        try {
        const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
        const response = await fetch(URL);
        const data = await response.json();
         setArticles(data.articles ||[]);
        } catch (error) {
          console.log("Error in fetching data: ", error);
          setError("Failed to fetch news articles. Please try again later.")
        }
    }
    useEffect(()=>{
        fetchData();
    },[category, country, apiKey])

  return (
    <div className='w-full h-full flex justify-evenly py-5 m-auto md:mt-4 mt-8'>
        <div className='w-[90%] h-auto flex md:flex-row flex-col gap-4 flex-wrap justify-evenly items-center'>
        {
        error ?(<p>{error}</p>) :(
          articles.length > 0 ? (
            articles.map((item)=>(
            <NewsItem 
            key={item.url} 
            title={item.title} 
            description={item.description} 
            image={item.urlToImage} 
            newsUrl={item.url} 
            authorName={item.author} />
        ))
      ):(
        <p>No articles available</p>
      ))}
        </div>
    </div>
  );
}

export default Home