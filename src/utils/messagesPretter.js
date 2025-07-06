import { format, isToday, isYesterday } from "date-fns"

export const messagesPretter = (messages) => {
    let result = []
    let lastDateLabel = ''

    messages.reverse().forEach(message => {
        const jsDate = message?.createdAt?.toDate()

        let label = ''
        if(isToday(jsDate)){
            label = 'Today'
        } else if( isYesterday(jsDate)){
            label = 'YesterDay'
        } else {
            label = format(jsDate, 'dd MMMM yyyy')
        }

 

        if(label !== lastDateLabel){
            result.push({
                type:'date',
                label,
            })
            lastDateLabel = label
        }

                       result.push({
            type:'message',
            ...message
        })



    })


    return result.reverse()
}