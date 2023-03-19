import {ThemeProvider} from '@mui/material'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './assets/styles/index.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import MainLayout from './layout/MainLayout'
import Router from './router/Router'
import store from './store/store'
import defaultTheme from './themes/mainTheme'

const CRM = () => {
   const queryProvide = new QueryClient()

   return (
      <BrowserRouter>
         <Provider store={store}>
            <QueryClientProvider client={queryProvide}>
               <ThemeProvider theme={defaultTheme}>
                  <MainLayout>
                     <Header />
                     <Sidebar />
                     <Router />
                  </MainLayout>
                  <ReactQueryDevtools />
               </ThemeProvider>
            </QueryClientProvider>
         </Provider>
      </BrowserRouter>
   )
}

export default CRM
