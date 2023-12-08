import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {lazy,Suspense} from 'react'
import DashBoardPage from '../pages/DashBoardPage'
import Loader from '../components/Loader'



const Home = lazy(()=>import('../pages/HomePage'))
const About = lazy(()=>import('../pages/AboutPage'))
const User = lazy(()=>import('../pages/UserPage'))


const Routing = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
     <Routes>
      <Route path='/' element={<DashBoardPage/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user' element={<User/>}/>
      </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default Routing