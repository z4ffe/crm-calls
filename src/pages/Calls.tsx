import {Box, Button} from '@mui/material'
import React, {useEffect, useState} from 'react'
import CallItem from '../components/CallItem'
import apiInstance from '../lib/axios/apiInstance'
import ICallData from '../types/interfaces/phoneList.interface'

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
   }, [getList])

   return (
      <Box sx={{display: 'flex', flexDirection: 'column', gridArea: 'calls', marginLeft: '120px'}}>
         {list.map((el: ICallData) => (
            <CallItem key={el.id} {...el} />
         ))}
         <Button onClick={() => setLimit((prevState) => prevState + 10)}>Load more</Button>
      </Box>
   )
}

export default Calls
