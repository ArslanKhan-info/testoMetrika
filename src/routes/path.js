import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Topbar from '../components/topbar/Topbar'
import Sidebar from '../components/sidebar/Sidebar'
import { Home } from '../pages'

const Path = () => {
  const [showSidebar,setShowSidebar] = useState(false)
  return (
    <>
      <Topbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Sidebar showSidebar={showSidebar}/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default Path