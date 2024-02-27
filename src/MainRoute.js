import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import TopHeader from './Layout/TopHeader'
import ApplicationStatus from './Pages/ApplicationStatus'
import Newber from './Layout/Newber'
import LastList from './Pages/LastList'
import Application from './Pages/Application'
import Affidavit from './Pages/Affidavit'
import Contect from './Pages/Contect'
import GovernmentOrder from './Pages/GovernmentOrder'


function MainRoute() {
  return (
    <>
     <BrowserRouter>
     <TopHeader />
     <Newber />
        <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/application-status' element={<ApplicationStatus />} />
        <Route path='/last-list' element={<LastList />} />
        <Route path='/application' element={<Application />} />
        <Route path='/government-order' element={<GovernmentOrder />} />
        <Route path='/affidavit' element={<Affidavit />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='/' element={<Navigate replace to="/home" />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default MainRoute