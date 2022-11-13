import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Topbar from '../components/topbar/Topbar'
import Sidebar from '../components/sidebar/Sidebar'
import { Home,ResultPage,TestPage } from '../pages'


const Path = () => {
  const [showSidebar,setShowSidebar] = useState(false)
  const location = useLocation()
  return (
    <>
      {location.pathname != '/iq-test-for-kids-7-to-16-year-old' && 
      <>
      <Topbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Sidebar showSidebar={showSidebar}/>
      </>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='iq-test-for-kids-7-to-16-year-old' element={<TestPage/>}/>
        <Route path='results' element={<ResultPage />} />
      </Routes>
    </>
  )
}

export default Path