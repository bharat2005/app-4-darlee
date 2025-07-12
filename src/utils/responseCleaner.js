export const responseClener = (string, dataType) => {

    const start = string.indexOf(dataType === 'object' ? '{' : '[')
    const end = string.lastIndexOf(dataType === 'object' ? '}' : ']')

    const a = string.slice(start, end + 1)

    try {
       const cleandedString = JSON.parse(a)
       return cleandedString
    } catch(err){
        console.log('Error at parsing', err.message)
        return{success:false}
    }
  
    
}