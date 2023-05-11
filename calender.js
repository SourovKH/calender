const getNumberOfDays = function (month) {
  const monthWithDays = {
    Jan: 31,
    Feb: 28,
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
  };

  return monthWithDays[month];
};
const getMonthAttributes = function () {
  const [day, month, date, year] = Date().split(" ");
  return [day, month, +date, +year];
};

const findStartingDay = function (day, date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const indexDisplacement = date % 7;
  const indexOfDay = days.indexOf(day);
  const firstDay = days[indexOfDay - indexDisplacement + 1];

  return firstDay;
};

const getCalenderFormat = function () {
  const days = {
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
  };

  return days;
};
const showCalender = function () {
  const [day, month, date, year] = getMonthAttributes();
  const totalDays = getNumberOfDays(month);
  const firstDay = findStartingDay(day, date);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let indexOfDay = days.indexOf(firstDay);
  const calender = getCalenderFormat();
  let currentDay = firstDay;

  for (let currentDate = 1; currentDate <= totalDays; currentDate++) {
    calender[currentDay].push(currentDate);
    indexOfDay = (indexOfDay + 1) % 7;
    currentDay = days[indexOfDay];
  }

  console.log(calender);
};

showCalender();
