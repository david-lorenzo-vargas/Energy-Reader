import { DIGIT_LENGTH } from "../constants";

const formatedFunction = (arr: string[]): string => {
  try {
    if (arr.length > DIGIT_LENGTH) {
      throw new Error()
    }
  
    if (arr.length === DIGIT_LENGTH) {
      return arr.join("");
    }
  
    const newArr = ["0", ...arr];
  
    return formatedFunction(newArr);

  } catch (error) {
    throw new Error(`Maximum digit length is ${DIGIT_LENGTH}`)
  }
};

export const formatPrediction = (prediction: number) => {
  const array = prediction.toString().split("");

  return formatedFunction(array);
};
