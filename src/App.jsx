import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, createRoutesFromChildren, Outlet, Route, RouterProvider } from 'react-router-dom'

export const router = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='general' element={<Navbar/>}/>
    <Route path='business' element={<Navbar/>}/>
    <Route path='entertainment' element={<Navbar/>}/>
    <Route path='general' element={<Navbar/>}/>
    <Route path='health' element={<Navbar/>}/>
    <Route path='science' element={<Navbar/>}/>
    <Route path='sports' element={<Navbar/>}/>
    <Route path='technology' element={<Navbar/>}/>
  </Route>
))

function App() {
  return (
    <div className='max-w-[1440px] mx-auto p-0'>    
      <Navbar/>
      <Outlet/>

    </div>
     
  )
}

export default App