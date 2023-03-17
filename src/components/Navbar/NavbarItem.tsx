import {Box} from '@mui/material'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {INavbarData} from './navbarData'

const NavbarItem: React.FC<INavbarData> = ({name, img, path}): JSX.Element => {
   return (
      <NavLink to={path}>
         {({isActive}) => {
            return isActive ? (
               <Box
                  sx={{
                     display: 'flex',
                     height: '52px',
                     alignItems: 'center',
                     borderLeft: '3px solid #002CFB',
                     transition: '.2s',
                     position: 'relative',
                     ':hover': {color: '#EAF0FA'},
                  }}>
                  <Box component='img' src={img} sx={{width: '24px', paddingX: '12px'}} />
                  <Box component='span' sx={{color: 'rgba(255, 255, 255, 1)', fontSize: '16px', fontWeight: '500'}}>
                     {name}
                  </Box>
                  <Box
                     sx={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#FFD500',
                        content: '""',
                        boxShadow: '0px 3px 8px rgba(237, 218, 1, 0.5)',
                        position: 'absolute',
                        right: '12px',
                     }}
                  />
               </Box>
            ) : (
               <Box
                  sx={{
                     display: 'flex',
                     height: '52px',
                     alignItems: 'center',
                     borderLeft: '3px solid transparent',
                  }}>
                  <Box component='img' src={img} sx={{width: '24px', paddingX: '12px'}} />
                  <Box
                     component='span'
                     sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '16px',
                        fontWeight: '500',
                        transition: '.2s',
                        ':hover': {color: '#fff'},
                     }}>
                     {name}
                  </Box>
               </Box>
            )
         }}
      </NavLink>
   )
}

export default NavbarItem
