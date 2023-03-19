const currentDate = () => {
   return `${new Date().toLocaleDateString('default', {weekday: 'long'})}, ${new Date().getDate()} ${new Date().toLocaleDateString('default', {
      month: 'long',
   })}`
}

export default currentDate
