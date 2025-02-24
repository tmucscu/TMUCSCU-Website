import { Timestamp } from "firebase-admin/firestore";
import { parse } from "date-fns";

export const createTimestamp = (date: string, endTime: string) => {
    if (!endTime.includes(":")) {
        endTime = endTime.slice(0, -2) + ":00" + endTime.slice(-2);
    }

    const dateString = date + " " + endTime

    const dateParsed = parse(
        dateString,
        "MMMM d, yyyy h:mma",
        new Date()
    );

    if (isNaN(dateParsed.getTime())) {
        throw new Error(`Invalid date format: "${dateString}". Expected formats: "September 23, 2002 8PM" or "September 23, 2002 8:30PM".`);
    }

    return Timestamp.fromDate(dateParsed);
}