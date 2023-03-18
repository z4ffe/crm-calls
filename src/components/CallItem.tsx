import {Box, Button, CircularProgress, Typography} from '@mui/material'
import React, {useState} from 'react'
import income from '../assets/images/callStatus/income.svg'
import outcome from '../assets/images/callStatus/outcome.svg'
import web from '../assets/images/web.svg'
import apiInstance from '../lib/axios/apiInstance'
import ICallData from '../types/interfaces/phoneList.interface'

const CallItem: React.FC<ICallData> = (call): JSX.Element => {
   const [record, setRecord] = useState('')
   const [recordLoading, setRecordLoading] = useState(false)

   // TODO: React Query New Version

   const fetchRecord = async (record_id: string, partner_id: string): Promise<void> => {
      if (!call.record) return
      if (!record) {
         setRecordLoading(true)
         const response = await apiInstance.post(
            `/mango/getRecord?record=${record_id}&partnership_id=${partner_id}`,
            {},
            {
               responseType: 'blob',
            }
         )
         const audio = new Audio(URL.createObjectURL(response.data))
         setRecord(audio.src)
         setRecordLoading(false)
      }
   }

   const handleCallStatus = (in_out: number, reason?: string): string | undefined => {
      if (in_out) return income
      if (!in_out) return outcome
   }

   const handleCallTime = (time: number): string => {
      const minutes = Math.floor(time / 60)
      const seconds = time - minutes * 60
      if (minutes < 10 && seconds < 10) return `0${minutes}:0${seconds}`
      return `${minutes}:${seconds}`
   }

   return (
      <Box
         sx={{
            display: 'flex',
            width: '1440px',
            height: '65px',
            borderTop: '1px solid #EAF0FA',
            borderBottom: '1px solid #EAF0FA',
            alignItems: 'center',
            transition: '0.2s',
            ':hover': {backgroundColor: '#EAF0FA'},
         }}
         onClick={() => fetchRecord(call.record, call.partner_data.id)}>
         <Box component='img' src={handleCallStatus(call.in_out)} />
         <Typography component='p'>{call.date.slice(11, 16)}</Typography>
         <Box component='img' src={call.person_avatar} alt='avatar' />
         {call.from_site ? <Box component='img' src={web} alt='from site' /> : null}
         <Typography component='p'>{`+7 (${call.partner_data.phone.slice(1, 4)}) ${call.partner_data.phone.slice(4)}`}</Typography>
         <Typography component='p'>{call.source}</Typography>
         {call.errors.length ? (
            <Typography component='p' sx={{fontSize: '14px', color: '#EA1A4F'}}>
               Скрипт не использован
            </Typography>
         ) : (
            <Button
               sx={{
                  width: '122px',
                  height: '40px',
                  border: '1px solid #002CFB',
                  bordeRadius: '4px',
                  fontWeight: '500',
                  fonSize: '14px',
                  color: '#002CFB',
               }}>
               Распознать
            </Button>
         )}
         {recordLoading ? (
            <CircularProgress size='25px' />
         ) : !recordLoading && record ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio controls src={record} />
         ) : null}
         <Typography component='p'>{handleCallTime(call.time)}</Typography>
      </Box>
   )
}

export default CallItem
