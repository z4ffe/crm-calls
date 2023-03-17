import {Box} from '@mui/material'
import React from 'react'
import logo from '../../assets/images/logo.svg'
import AddOrderBtn from '../../shared/buttons/AddOrderBtn'
import PaymentBtn from '../../shared/buttons/PaymentBtn'
import Navbar from '../Navbar/Navbar'

const Sidebar = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '240px',
            minHeight: '100vh',
            gridArea: 'sidebar',
            backgroundColor: '#091336',
         }}>
         <Box component='img' src={logo} sx={{width: '109px', padding: '20px 0 0 9px'}} />
         <Navbar />
         <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', marginTop: '64px'}}>
            <AddOrderBtn />
            <PaymentBtn />
         </Box>
      </Box>
   )
}

export default Sidebar
