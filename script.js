const date = document.getElementById("date");
const day = document.getElementById("day");
const week = document.getElementById("weekdays");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date()

const Months= ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekdays[today.getDay()];
week.innerHTML = weekdays[today.getDay()];
day.innerHTML = Months[today.getMonth()];
year.innerHTML = today.getFullYear();
