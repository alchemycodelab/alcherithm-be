/* eslint-disable no-unused-vars */


/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named firstLetters that takes in an array of strings and returns an array containing only the first letter of each string.

For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['t', 'w', 'w', ':']
------------------------------------------------------------------------------------------------ */

export const firstLetters = (arr) => {
  const result = arr.map(([v])=> v);
  return result;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named findHappiness that takes in an array of strings and returns an array containing only the strings from the input array that contain ":)".

For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['this is great :)', ':)))))']
------------------------------------------------------------------------------------------------ */

export const findHappiness = (arr) => {
  return arr.filter(item => {
    return item.includes(':)');
  });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named standardizePhoneNumbers that takes in an array of phone number strings in (XXX) XXX-XXXX format and returns an array with the phone number strings in XXXXXXXXXX format.

For example, (123) 456-7890 returns 1234567890
------------------------------------------------------------------------------------------------ */

export const standardizePhoneNumbers = (arr) => {
  return arr.map(item => {
    let first = item.substring(1, 4);
    let second = item.substring(6, 9);
    let third = item.substring(10, 14);
    return first + second + third;
  });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named onlyOddChars that takes in a string and returns only the odd-index characters from that string.

For example, 'abcdefg' returns 'bdf'
------------------------------------------------------------------------------------------------ */


export const onlyOddChars = (str) => {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(i % 2 !== 0) {
      result += str.charAt(i);
    }
  }
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named allHappy that takes in an array of strings and returns a Boolean indicating whether all those strings contain ":)".
------------------------------------------------------------------------------------------------ */

export const allHappy = (arr) => {
  const filteredArr = arr.filter(item => {
    return item.includes(':)');
  });
  if(filteredArr.length === arr.length) {
    return true;
  } else {
    return false;
  }
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named findAnything that takes in an array of strings, along with a target string. Return an array containing only those strings from the original array that contain the target string.
------------------------------------------------------------------------------------------------ */

export const findAnything = (arr, target) => {
  return arr.filter(item => {
    return item.includes(target);
  });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7

Write a function named findEvery that takes in an array of strings, along with a target string. Return a Boolean based on whether or not every string in the array contains the target string.
------------------------------------------------------------------------------------------------ */

export const findEvery = (arr, target) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8

We've been testing a new course enrollment system, and we think we have the bugs worked out, but in the meantime, Brook enrolled himself in a bunch of different classes to test if it was working.

Write a function named unenrollBrook that takes in a two-dimensional array, where each array represents one course's roster and is an array of strings of the names of the people in that course.

Return a two-dimensional array with the same roster, but where anyone whose name includes Brook is removed from every course.

For example, [['Brook Testing', 'Actual Person'], ['Human Person', 'Brook again', 'still Brook']] returns [['Actual Person'], ['Human Person']]
------------------------------------------------------------------------------------------------ */

export const unenrollBrook = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named sortByDay that takes in an array of strings, each of which represents an event's day and time.

Return a two-dimensional array that organizes those strings based on the day on which they occur. For example, all events on Monday are in the first array, all events on Tuesday are in the second array, etc.

If an event takes place on multiple days (i.e. "Dancing on Mondays and Tuesdays"), it should appear in both arrays.

For example, ['Tuesday', 'Monday', 'Wednesday and Thursday', 'Tuesday 2', 'Thursday'] returns
[
  ['Monday'],
  ['Tuesday', 'Tuesday 2'],
  ['Wednesday and Thursday'],
  ['Wednesday and Thursday', 'Thursday'],
  [],
  [],
  []
]
------------------------------------------------------------------------------------------------ */

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const sortByDay = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named characterByIndex that takes in an array of strings and returns an array containing the first character of the first string, the second character of the second string, etc.

For example, ['abcd', 'efgh', 'ijkl', 'mnop'] returns ['a', 'f', 'k', 'p']
------------------------------------------------------------------------------------------------ */

export const characterByIndex = (arr) => {
  // Solution code here...
};
