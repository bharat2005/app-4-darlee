export const responseClener = (string) => {

    const start = string.indexOf('{')
    const end = string.lastIndexOf('}')

    const a = string.slice(start, end + 1)

    try {
       const cleandedString = JSON.parse(a)
       return cleandedString
    } catch(err){
        console.log('Error at parsing', err.message)
        return{success:false}
    }
  
    
}