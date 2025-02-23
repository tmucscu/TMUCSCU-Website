const months = new Set(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])

export const validateDate = (date: string) => {
    const values = date.split(" ")

    if (values.length !== 3) return false

    const [month, day, year] = values
    
    // Month validation
    if (!months.has(month)) return false

    // Day validation
    const dayNum = Number(day.slice(0, -1))

    if (isNaN(dayNum) || dayNum < 1 || dayNum > 31 || day[day.length - 1] !== ',') return false

    // Year validation
    const yearNum = Number(year)

    if (year.length !== 4 || isNaN(yearNum)) return false
    
    return true
}
