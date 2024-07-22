const returnCoinsNumber = (arrayOfCoins, value) => {
  if (arrayOfCoins.length === 0 || value === 0) return 0;
  const sortedArrayOfCoins = arrayOfCoins.sort((a, b) => b - a);
  const [maxValue, ...newArrayOfCoins] = sortedArrayOfCoins;
  const numberOfMaxValuesInValue = Math.floor(value / maxValue);
  return (
    numberOfMaxValuesInValue +
    returnCoinsNumber(
      newArrayOfCoins,
      value - numberOfMaxValuesInValue * maxValue
    )
  );
};

module.exports = returnCoinsNumber;
