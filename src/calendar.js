export function getMonth() {
    const date = new Date();
    const month = date.getMonth();
    console.log("Month: ", month);
    return month; // get the current month
}

export function getYear() {
    const date = new Date();
    const year = date.getFullYear();
    console.log("Year: ", year);
    return year; // get the current year
}

export function getFirstDay() {
    const firstDay = new Date(getYear(), getMonth(), 1).getDay();
    console.log("First Day: ", firstDay);
    return firstDay; // find what day of the week the first day of the month is
}

export function getDaysInMonth() {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    console.log("Days in Month: ", daysInMonth);
    return daysInMonth; // find out how many days are in the month
}

export default function getToday(){
   const date = new Date();
   const today = date.getDate();
   console.log("Today: ", today);
   return today;
}