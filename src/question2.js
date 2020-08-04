function question2() {
  const numbers = [5, 8, 7, 9, 2, 5, 3];
  let oddNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const positionValue = numbers[i];

    if (positionValue % 2 !== 0) {
      oddNumbers.push(positionValue);
    }
  }

  return oddNumbers;
}

export default question2;
