import {Box, Button} from '@mui/material'
import {useQuery} from '@tanstack/react-query'
import React, {useState} from 'react'
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

   const {
      data: callList,
      error: callListError,
      isLoading: callListLoading,
   } = useQuery({
      queryKey: ['callList'],
      queryFn: getList,
   })

   if (callListLoading) return <div>Loading...</div>
   if (callListError) return <div color='red'>Error</div>

   return (
      <Box sx={{display: 'flex', flexDirection: 'column', gridArea: 'calls', marginLeft: '120px'}}>
         {callList.map((el: ICallData) => (
            <CallItem key={el.id} {...el} />
         ))}
         <Button onClick={() => setLimit((prevState) => prevState + 10)}>Load more</Button>
      </Box>
   )
}

export default Calls
