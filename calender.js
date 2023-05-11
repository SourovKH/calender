const getNumberOfDays = function (year, month) {
  const date = new Date(year, month);
  return date.getUTCDate();
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

const generateSequence = function(start, end) {
  const sequence = new Array(end - start + 1).fill();
  return sequence.map(function(_,i) {
    return i + 1;
  });
}

const applyPadding = function (padding, text) {
  return text.toString().padStart(padding);
};

const weekToString = function (week) {
  return week.map(applyPadding.bind(null, 2)).join(" ");
};

const renderCalender = function (dates, month, year) {
  const header = `\t${month} ${year}`;
  const days = "Su Mo Tu We Th Fr Sa";

  const weeks = dates.map(function (week) {
      return weekToString(week);
  }).join("\n");

  return `${header}\n${days}\n${weeks}\n`;
};

const generateDates = function (year, month) {
  const monthStartsOn = getFirstDay(year, month);

  console.log(monthStartsOn);

  const leftPad = new Array(monthStartsOn).fill(' ');
  const noOfDays = getNumberOfDays(year, month + 1);

  const dates = generateSequence(1, noOfDays);
  const calender = leftPad.concat(dates);
  
  return chunk(calender, 7);
};

exports.renderCalender = renderCalender;
exports.generateDates = generateDates;