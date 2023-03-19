import apiInstance from '../lib/axios/apiInstance'

const fetchCallRecord = async (record_id: string, partner_id: string): Promise<HTMLAudioElement> => {
   const response = await apiInstance.post(
      `/mango/getRecord?record=${record_id}&partnership_id=${partner_id}`,
      {},
      {
         responseType: 'blob',
      }
   )
   return new Audio(URL.createObjectURL(response.data))
}

export default fetchCallRecord
