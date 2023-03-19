import {Box} from '@mui/material'
import React from 'react'
import CallList from '../components/CallsList/CallList'

const Calls: React.FC = (): JSX.Element => {
   return (
      <Box sx={{width: '100%'}}>
         <CallList />
      </Box>
   )
}

export default Calls
