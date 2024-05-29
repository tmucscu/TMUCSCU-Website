type FormatDateAndLocationType = {
    date: string;
    startTime?: string;
    endTime: string;
    location?: string;
}

export const formatDateAndLocation = ({date, startTime, endTime, location}: FormatDateAndLocationType) => {
    let formattedText = date + " | "
    if (startTime) 
        formattedText += startTime + "-"
    formattedText += endTime
    if (location)
        formattedText += " | " + location

    return formattedText
}