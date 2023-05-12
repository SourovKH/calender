const { generateDates, renderCalendar } = require('./calender.js');

const getMonthIndex = function(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];

  return months.indexOf(month);
}

const isInvalidArgument = function(args) {
  const totalAtguments = args.length;
  const [month, year] = args;
  const monthIndex = getMonthIndex(month);

  return (totalAtguments < 2 || monthIndex === -1 || year < 1);
}

const showUsageMessage = function() {
  let message = `Invalid arguments
  Usage: (Month) (Year)
  Year starts from 1`;
  // message += "\n";
  // message += "Usage: (Month) (Year)";
  // message += "\n\t";
  // message += "Year starts from 1";
  console.log(message);
}

const main = function() {
  const [month, year] = process.argv.slice(2);
  
  if(isInvalidArgument([month, year])) {
    showUsageMessage();
    process.exit(1);
  }
  
  const monthIndex = getMonthIndex(month);
  const dates = generateDates(year, monthIndex);
  
 console.log( renderCalendar(dates, month, year));
}

main();
