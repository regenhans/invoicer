var monthNames = [
  "Enero", "Febrero", "Marzo",
  "Abril", "Mayo", "Junio", "Julio",
  "Augosto", "Septiembre", "Octubre",
  "Noviembre", "Diciembre"
];

var date = new Date();
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();
var today = (monthNames[monthIndex]+ ' ' + day + ', ' + year);