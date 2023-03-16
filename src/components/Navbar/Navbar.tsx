import {Box} from '@mui/material'
import React from 'react'
import navbarData from './navbarData'
import NavbarItem from './NavbarItem'

const Navbar: React.FC = (): JSX.Element => {
   return (
      <Box sx={{display: 'flex', flexDirection: 'column', color: 'white', marginTop: '32px'}}>
         {navbarData.map((el) => (
            <NavbarItem key={el.id} name={el.name} img={el.img} />
         ))}
      </Box>
   )
}

export default Navbar
