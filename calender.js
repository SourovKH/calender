const getNumberOfDays = function (year, month) {
  const date = new Date(year, month);
  return date.getUTCDate();
};

const getFirstDay = function (year, month) {
  return new Date(year, month, 1).getDay();
};

const chunk = function (list, size) {
  if (list.length === 0) return list;

  const currentChunk = list.slice(0, size);
  const remaining = list.slice(size);

  return [currentChunk].concat(chunk(remaining, size));
};

const generateSequence = function(start, end) {
  const sequence = new Array(end - start + 1).fill();
  return sequence.map(function(_,i) {
    return i + start;
  });
}

const applyPadding = function (padding, text) {
  return text.toString().padStart(padding);
};

const weekToString = function (week) {
  return week.map(applyPadding.bind(null, 2)).join(" ");
};

const centerAlign = function(text, width) {
  let alignedText = text.padStart((width + text.length) / 2);
  return alignedText.padEnd(width);
}

const renderCalendar = function (dates, month, year) {
  const headerText = `${month} ${year}`;
  const header = centerAlign(headerText, 20);
  const days = "Su Mo Tu We Th Fr Sa";
  const weeks = dates.map(weekToString).join("\n");

  return `${header}\n${days}\n${weeks}\n`;
};

const generateDates = function (year, month) {
  const monthStartsOn = getFirstDay(year, month);
  const leftPad = new Array(monthStartsOn).fill(' ');
  const noOfDays = getNumberOfDays(year, month + 1);
  const dates = generateSequence(1, noOfDays);
  const calender = leftPad.concat(dates);
  
  return chunk(calender, 7);
};

exports.renderCalendar = renderCalendar;
exports.generateDates = generateDates;