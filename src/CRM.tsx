import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import './assets/styles/index.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import MainLayout from './layout/MainLayout'
import Calls from './pages/Calls'
import store from './store/store'

const CRM = () => {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <MainLayout>
               <Header />
               <Sidebar />
               <Routes>
                  <Route path='calls' element={<Calls />} />
               </Routes>
            </MainLayout>
         </Provider>
      </BrowserRouter>
   )
}

export default CRM
