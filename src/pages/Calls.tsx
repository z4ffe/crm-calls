import {Box} from '@mui/material'
import React, {useEffect, useState} from 'react'
import apiInstance from '../lib/axios/apiInstance'

const Calls: React.FC = (): JSX.Element => {
   const [list, setList] = useState([])

   useEffect(() => {
      async function getList() {
         const response = await apiInstance.post('/mango/getList', {})
         setList(response.data.results)
      }
      getList()
   }, [])

   return (
      <Box sx={{display: 'flex', gridArea: 'calls'}}>
         {list.map((el: any) => {
            return (
               <div>
                  <h6>{el.from_number}</h6>
                  <p>{el.partner_data.name}</p>
               </div>
            )
         })}
      </Box>
   )
}

export default Calls
