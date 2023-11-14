// Purpose: Home page functionality

import { getMonth,getMonthLetters, getYear, getFirstDay, getDaysInMonth } from './calendar.js';
import getToday from './calendar.js';

export default function home() {
    createCalendar();
}
   
function createCalendar() {
    const calendarDiv = document.getElementById('calendar');
    const month = getMonth(); 
    const monthLetters= getMonthLetters();
    const year = getYear(); 
    const firstDay = getFirstDay(); // find what day of the week the first day of the month is
    const daysInMonth = getDaysInMonth();

    const table = document.createElement('table');

    //create the month and year header

    const header = document.createElement('h2');
    header.textContent = `${monthLetters} ${year}`;
    calendarDiv.appendChild(header);
    // create the days of the week headers
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const headerRow = document.createElement('tr');
    
    for(let day of days) {
        const th = document.createElement('th');
        th.textContent = day;
        th.classList.add('weekDays');
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    let tr = document.createElement('tr');

    // create the calendar headers
    for(let i = 0; i < firstDay; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }
  
    // create the calendar rows
    for(let i = 1; i <= daysInMonth; i++) {
        if((i + firstDay) % 7 === 1 && i !== 1) {
            table.appendChild(tr);
            tr = document.createElement('tr');
        }
        const td = document.createElement('td');
        td.textContent = i;
        td.classList.add('dayCell');
        // check if the day is today
        if(i === getToday() && month === getMonth() && year === getYear()) {
            td.classList.add('today');
        }
        tr.appendChild(td);
    }

    table.appendChild(tr);

   
    //in the calendar div, append the table
    calendarDiv.appendChild(table);
}