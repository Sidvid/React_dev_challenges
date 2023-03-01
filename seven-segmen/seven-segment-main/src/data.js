export const data = {
  zero: [1, 1, 1, 0, 1, 1, 1],
  one: [0, 1, 1, 0, 0, 0, 0],
  two: [1, 1, 0, 1, 0, 1, 1],
  three: [1, 1, 1, 1, 0, 0, 1],
  four: [0, 1, 1, 1, 1, 0, 0],
  five: [1, 0, 1, 1, 1, 0, 1],
  six: [1, 0, 1, 1, 1, 1, 1],
  seven: [1, 1, 1, 0, 0, 0, 0],
  eight: [1, 1, 1, 1, 1, 1, 1],
  nine: [1, 1, 1, 1, 1, 0, 1],
};
export const getNumberMap = (num) => {
  console.log('=>', num);
  switch (true) {
    case num === 1:
      return 'one';
    case num === 2:
      return 'two';
    case num === 3:
      console.log('here');
      return 'three';
    case num === 4:
      return 'four';
    case num === 5:
      return 'five';
    case num === 6:
      return 'six';
    case num === 7:
      return 'seven';
    case num === 8:
      return 'eight';
    case num === 9:
      return 'nine';
    case num === 0:
    return "zero"
    default:
      return 'default';
  }
};
