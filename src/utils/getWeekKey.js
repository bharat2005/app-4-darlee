import { getISOWeek, getYear, parseISO } from "date-fns"

export const getWeekKey = (date) => {
const dateObj = parseISO(date)
const weekNum = getISOWeek(dateObj).toString()
const year = getYear(dateObj)

return `${year}-W${weekNum.padStart(2, '0')}`
}
