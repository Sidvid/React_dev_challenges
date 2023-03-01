export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
export const getRandomColorHex = () => {
  let variables = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let myColor = '#';
  for (let i = 1; i < 7; i++) {
    let randomValue = Math.floor(Math.random() * variables.length);
    myColor = myColor + variables[randomValue];
  }
  return myColor;
};
