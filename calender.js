const getNumberOfDays = function (month) {
  const monthsDays = [31, 28, 31, 30, 31, 30, 31, 30];

  return monthsDays[month];
};

const getFirstDay = function (year, month) {
  return new Date(year, month, 1).getDay();
};

const chunk = function (list, size, overlap = 0) {
  if (list.length === 0) return list;

  if (list.length <= overlap) return [list];

  const currentChunk = list.slice(0, size);
  const remaining = list.slice(size - overlap);
  return [currentChunk].concat(chunk(remaining, size, overlap));
};

const applyPadding = function (padding, text) {
  return text.toString().padStart(padding);
};

const weekToString = function (week) {
  return week.map(applyPadding.bind(null, 2)).join(" ");
};

const renderCalender = function (calender, month, year) {
  const header = `\t${month} ${year}`;
  const days = "Su Mo Tu We Th Fr Sa";

  const weeks = calender.map(function (week) {
      return weekToString(week);
  }).join("\n");

  return `${header}\n${days}\n${weeks}\n`;
};

const generateCalander = function (year, month) {
  const monthStartsOn = getFirstDay(year, month);

  const calender = new Array(monthStartsOn).fill(" ");
  const noOfDays = getNumberOfDays(month);

  for (let date = 1; date <= noOfDays; date++) {
    calender.push(date);
  }

  return chunk(calender, 7);
};

console.log(renderCalender(generateCalander(2023, 5), "June", 2023));
