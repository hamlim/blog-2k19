/* eslint-disable */

export function monthNumberToMonthName(month) {
  switch (month) {
    case '01':
      return 'January'
    case '02':
      return 'February'
    case '03':
      return 'March'
    case '04':
      return 'April'
    case '05':
      return 'May'
    case '06':
      return 'June'
    case '07':
      return 'July'
    case '08':
      return 'August'
    case '09':
      return 'September'
    case '10':
      return 'October'
    case '11':
      return 'November'
    case '12': 
      return 'December'
  }
}

export function parseDate(dateString) {
  // MM-DD-YYYY
  let split = dateString.split('-');
  // DD-MM-YYYY
  split = [split[1], split[0], split[2]];
  split[1] = monthNumberToMonthName(split[1]);
  const attemptedString = split.join(' ');
  return new Date(attemptedString);
}