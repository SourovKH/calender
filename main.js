const { generateDates, renderCalender } = require('./calender.js');

const getMonthIndex = function(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'];

  return months.indexOf(month);
}
const main = function() {
  const [month, year] = process.argv.slice(2);
  
  const monthIndex = getMonthIndex(month);

  const dates = generateDates(year, monthIndex);
 console.log( renderCalender(dates, month, year));
}

main();
