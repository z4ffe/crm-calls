import {Box} from '@mui/material'
import React from 'react'

const Header = () => {
   return (
      <Box sx={{display: 'flex', gridArea: 'header', backgroundColor: 'white', boxShadow: '0px 4px 5px #E9EDF3'}}>
         <Box component='span' sx={{fontWeight: '400', fontSize: '15px', color: '#899CB1'}}>
            {new Date().toDateString()}
         </Box>
      </Box>
   )
}

export default Header
