import {Box, Typography} from '@mui/material'
import React from 'react'
import {INavbarData} from './navbarData'

const NavbarItem: React.FC<INavbarData> = ({name, img}): JSX.Element => {
   return (
      <Box sx={{display: 'flex', height: '52px', alignItems: 'center'}}>
         <Box component='img' src={img} sx={{width: '24px', paddingX: '12px'}} />
         <Typography variant='body1' sx={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px', fontWeight: '500'}}>
            {name}
         </Typography>
      </Box>
   )
}

export default NavbarItem
