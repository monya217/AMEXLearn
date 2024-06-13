/* List Fetching Random Music */

function randomArrayShuffle(array, seed = false, compareArray = false) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    if (compareArray) {
      array = Math.random() * 10 >= 5 ? array : compareArray;
    }
  
    return seed
      ? Object.values(array).slice(
          0,
          Math.random() * 5 + 2 >= 6 ? 6 : Math.random() * 5 + 3
        )
      : array;
  }
  
  /* secondToTime */
  
  function secondToTime(seconds) {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  }
  
  export { randomArrayShuffle, secondToTime };


  /*export const randomArrayShuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const secondToTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(14, 5);
};
 */