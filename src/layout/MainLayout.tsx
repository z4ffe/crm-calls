import {Box} from '@mui/material'
import React from 'react'

type IPropsChildren = {
   children: React.ReactNode
}

const MainLayout: React.FC<IPropsChildren> = ({children}) => {
   return (
      <Box
         sx={{
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
            gridTemplateRows: '64px 1fr',
            gridTemplateAreas: `"sidebar header" "sidebar calls"`,
         }}>
         {children}
      </Box>
   )
}

export default MainLayout
