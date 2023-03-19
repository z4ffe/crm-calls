import {Box, LinearProgress, Typography} from '@mui/material'
import React from 'react'
import {Simulate} from 'react-dom/test-utils'
import currentDate from '../../utils/currentDate'

const Header = () => {
   return (
      <Box sx={{display: 'flex', gridArea: 'header', backgroundColor: 'white', boxShadow: '0px 4px 5px #E9EDF3', alignItems: 'center'}}>
         <Box component='span' sx={{fontWeight: '400', fontSize: '15px', color: '#899CB1'}}>
            {currentDate()}
         </Box>
         <Box sx={{width: '300px'}}>
            <Typography component='p'>Новые звонки 20 из 30 шт</Typography>
            <LinearProgress variant='determinate' value={50} sx={{width: '156px', color: '#DEE6F5'}} />
         </Box>
         <Box sx={{width: '300px'}}>
            <Typography component='p'>Качество разговоров 40%</Typography>
            <LinearProgress variant='determinate' value={50} sx={{width: '156px', color: '#DEE6F5'}} />
         </Box>
         <Box sx={{width: '300px'}}>
            <Typography component='p'>Конверсия в заказ 67%</Typography>
            <LinearProgress variant='determinate' value={50} sx={{width: '156px', color: '#DEE6F5'}} />
         </Box>
      </Box>
   )
}

export default Header
