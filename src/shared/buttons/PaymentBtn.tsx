import {Box, Button} from '@mui/material'
import React from 'react'
import payImage from '../../assets/images/pay.svg'

const PaymentBtn: React.FC = (): JSX.Element => {
   return (
      <Button
         sx={{
            width: '200px',
            height: '52px',
            borderRadius: '4px',
            color: 'white',
            backgroundColor: '#005FF8',
            paddingLeft: '60px',
            fontWeight: '500',
            fontSize: '16px',
            textTransform: 'none',
            ':hover': {backgroundColor: '#0024CB'},
            ':active': {backgroundColor: '#274BC8'},
         }}
         disableRipple>
         Оплата
         <Box component='img' src={payImage} sx={{paddingLeft: '31px'}} />
      </Button>
   )
}

export default PaymentBtn
