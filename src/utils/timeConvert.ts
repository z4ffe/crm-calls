const timeConvert = (time: number): string => {
   const minutes = Math.floor(time / 60)
   const seconds = time - minutes * 60
   if (minutes < 10 && seconds < 10) return `0${minutes}:0${seconds}`
   return `${minutes}:${seconds}`
}

export default timeConvert
