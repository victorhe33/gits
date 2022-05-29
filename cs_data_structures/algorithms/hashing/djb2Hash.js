const djb2 = (str) => {
  const charArray = str.split('').map(char => char.charCodeAt(0));
  return charArray.reduce((acc, cVal) => ((acc << 5) + acc) + cVal, 5381);
}
module.exports = djb2;