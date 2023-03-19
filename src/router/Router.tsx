import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Calls from '../pages/Calls'

const Router = () => {
   return (
      <Routes>
         <Route path='calls' element={<Calls />} />
      </Routes>
   )
}

export default Router
