import {Box, Button} from '@mui/material'
import {useInfiniteQuery} from '@tanstack/react-query'
import React from 'react'
import CallItem from './CallItem'
import apiInstance from '../../lib/axios/apiInstance'
import ICallData from '../../types/interfaces/phoneList.interface'

const CallList: React.FC = (): JSX.Element => {
   const getList = async ({pageParam = 10}) => {
      const response = await apiInstance.post(`/mango/getList?limit=${pageParam}`)
      return response.data.results
   }

   const {data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status} = useInfiniteQuery({
      queryKey: ['callList'],
      queryFn: getList,
      getNextPageParam: (lastPage, pages) => lastPage.length + 5,
   })

   // @ts-ignore
   if (status === 'loading') return <div>Loading...</div>
   if (error) return <div color='red'>Error</div>

   return (
      <Box sx={{display: 'flex', flexDirection: 'column', gridArea: 'calls', marginLeft: '120px', marginTop: '100px'}}>
         {data?.pages.at(-1).map((el: ICallData) => (
            <CallItem key={el.id} {...el} />
         ))}
         <Button onClick={() => fetchNextPage()}>Load more</Button>
      </Box>
   )
}

export default CallList
