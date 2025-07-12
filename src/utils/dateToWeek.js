import { addDays, format, parse, parseISO, startOfISOWeek, startOfWeek } from "date-fns"

export const dateToWeek = (dateString) => {
     const dateObj =  parseISO(dateString)
    const mondayObj = startOfISOWeek(dateObj)
    
    return Array.from({length:7}, (item, index) => {
        return format(addDays(mondayObj, index), 'yyyy-MM-dd')
    })
    
}