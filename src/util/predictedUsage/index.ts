export const predictedUsage = (arr: number[]) => arr.reduce((acc: number, currentVal: number, index: number, array: number[]): number => {
  const nextValue = array[index + 1];

  if (!!nextValue) {
    const difference = currentVal - nextValue;
    return difference + acc; // calculate total difference between numbers
  }

  // on the last index, calculate an average difference, 
  // round it up and add it to the most recent usage
  const averageDifference = Math.round(acc/index);

  return array[0] + averageDifference;
}, 0);