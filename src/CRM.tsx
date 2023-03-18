import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './assets/styles/index.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import MainLayout from './layout/MainLayout'
import Calls from './pages/Calls'
import store from './store/store'

const CRM = () => {
   const queryProvide = new QueryClient()

   return (
      <BrowserRouter>
         <Provider store={store}>
            <QueryClientProvider client={queryProvide}>
               <MainLayout>
                  <Header />
                  <Sidebar />
                  <Routes>
                     <Route path='calls' element={<Calls />} />
                  </Routes>
               </MainLayout>
            </QueryClientProvider>
         </Provider>
      </BrowserRouter>
   )
}

export default CRM
