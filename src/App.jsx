import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, createRoutesFromChildren, Outlet, Route} from 'react-router-dom'

const apiKey = import.meta.env.VITE_NEWS_API;
export const router = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home country="in" category="general" apiKey={apiKey}/>}/>
    <Route path='general' element={<Home country="in" category="general" apiKey={apiKey}/>}/>
    <Route path='business' element={<Home country="in" category="business" apiKey={apiKey}/>}/>
    <Route path='entertainment' element={<Home country="in" category="entertainment" apiKey={apiKey}/>}/>
    <Route path='health' element={<Home country="in" category="health" apiKey={apiKey}/>}/>
    <Route path='science' element={<Home country="in" category="science" apiKey={apiKey}/>}/>
    <Route path='sports' element={<Home country="in" category="sports" apiKey={apiKey}/>}/>
    <Route path='technology' element={<Home country="in" category="technology" apiKey={apiKey}/>}/>
  </Route>
))

function App() {
  
  return (
    <div className='min-w-[1440px] h-full m-auto p-0 bg-black'>    
      <Navbar/>
      <Outlet/>
    </div>
     
  )
}

export default App