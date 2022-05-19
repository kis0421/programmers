function solution(brown, yellow) {
  const totalBlockCount = brown + yellow;
  if (brown === yellow * 2) {
    return [brown / (yellow / 2) * 2, yellow / 2];
  }
  let brownLength = 1;

  while (true) {
    const expectedNumber = totalBlockCount / brownLength;
    if (Number.isInteger(expectedNumber) && expectedNumber > 1 && brownLength >= expectedNumber &&
      (brownLength - 2) * (expectedNumber - 2) === yellow) {
      break;
    } else {
      brownLength++;
    }
  }
  return [brownLength, totalBlockCount / brownLength];
}
