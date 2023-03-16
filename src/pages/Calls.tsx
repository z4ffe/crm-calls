import {Box, Button} from '@mui/material'
import React, {useEffect, useState} from 'react'
import apiInstance from '../lib/axios/apiInstance'

const Calls: React.FC = (): JSX.Element => {
   const [list, setList] = useState([])
   const [limit, setLimit] = useState(10)

   const getList = async () => {
      const response = await apiInstance.post(`/mango/getList?limit=${limit}`)
      return response.data.results
   }

   useEffect(() => {
      getList()
         .then((res) => setList(res))
         .catch((error) => console.log(error))
   }, [limit])

   return (
      <Box sx={{display: 'flex', flexDirection: 'column', gridArea: 'calls'}}>
         {list.map((el: any) => {
            return (
               <div key={Math.random()}>
                  <h6>{el.from_number}</h6>
                  <p>{el.partner_data.name}</p>
               </div>
            )
         })}
         <Button onClick={() => setLimit((prevState) => prevState + 10)}>Load more</Button>
      </Box>
   )
}

export default Calls
