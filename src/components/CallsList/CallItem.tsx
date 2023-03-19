import {Box, Button, CircularProgress, Typography} from '@mui/material'
import React, {useState} from 'react'
import income from '../../assets/images/callStatus/income.svg'
import outcome from '../../assets/images/callStatus/outcome.svg'
import web from '../../assets/images/web.svg'
import fetchCallRecord from '../../services/record.service'
import ICallData from '../../types/interfaces/phoneList.interface'
import timeConvert from '../../utils/timeConvert'

const CallItem: React.FC<ICallData> = (call): JSX.Element => {
   const [record, setRecord] = useState('')
   const [recordLoading, setRecordLoading] = useState(false)

   const fetchRecord = async (record_id: string, partner_id: string): Promise<void> => {
      if (!call.record) return
      if (!record) {
         setRecordLoading(true)
         const callRecord = await fetchCallRecord(record_id, partner_id)
         setRecord(callRecord.src)
         setRecordLoading(false)
      }
   }

   const handleCallStatus = (in_out: number, reason?: string): string | undefined => {
      if (in_out) return income
      if (!in_out) return outcome
   }

   return (
      <Box
         sx={{
            display: 'flex',
            width: '100%',
            height: '65px',
            borderTop: '1px solid #EAF0FA',
            borderBottom: '1px solid #EAF0FA',
            alignItems: 'center',
            transition: '0.2s',
            ':hover': {backgroundColor: '#EAF0FA'},
         }}
         onClick={() => fetchRecord(call.record, call.partner_data.id)}>
         <Box sx={{display: 'flex', width: '70px'}}>
            <Box component='img' src={handleCallStatus(call.in_out)} />
         </Box>
         <Box sx={{display: 'flex', width: '180px'}}>
            <Typography component='p' sx={{fontWeight: '400', fontSize: '15px', color: '#122945'}}>
               {call.date.slice(11, 16)}
            </Typography>
         </Box>
         <Box sx={{display: 'flex', width: '86px'}}>
            <Box component='img' src={call.person_avatar} alt='avatar' />
         </Box>
         <Box sx={{display: 'flex', width: '80px'}}>{call.from_site ? <Box component='img' src={web} alt='from site' /> : null}</Box>
         <Box sx={{display: 'flex', width: '526px'}}>
            <Typography sx={{fontWeight: '400', fontSize: '15px', color: '#122945'}} component='p'>{`+7 (${call.partner_data.phone.slice(1, 4)}) ${call.partner_data.phone.slice(4, 7)}-${call.partner_data.phone.slice(
               7,
               9
            )}-${call.partner_data.phone.slice(9)}`}</Typography>
         </Box>
         <Box sx={{display: 'flex', width: '326px'}}>
            <Typography component='p' sx={{fontWeight: '400', fontSize: '15px', color: '#5E7793'}}>
               {call.partner_data.name}
            </Typography>
         </Box>
         <Box sx={{width: 'fit-content'}}>
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
                     borderRadius: '4px',
                     fontWeight: '500',
                     fonSize: '14px',
                     color: '#002CFB',
                  }}>
                  Распознать
               </Button>
            )}
         </Box>
         <Box sx={{width: '100%'}}>{recordLoading ? <CircularProgress size='25px' /> : !recordLoading && record ? <audio controls src={record} /> : null}</Box>
         <Box sx={{width: '100px'}}>
            <Typography component='p'>{timeConvert(call.time)}</Typography>
         </Box>
      </Box>
   )
}

export default CallItem
