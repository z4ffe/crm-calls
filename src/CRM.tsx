import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import MainLayout from './layout/MainLayout'
import Calls from './pages/Calls'
import store from './store/store'
import './assets/styles/index.scss'

const CRM = () => {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <MainLayout>
               <Header />
               <Sidebar />
               <Calls />
            </MainLayout>
         </Provider>
      </BrowserRouter>
   )
}

export default CRM
