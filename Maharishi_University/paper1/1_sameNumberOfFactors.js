function sameNumberOfFactors(num1, num2) {
  if (num1 < 0 || num2 < 0) return -1;

  let count1 = 0;
  let count2 = 0;

  for (let i = 1; i <= num1; i++) {
    if (num1 % 1 == 0) count1++;
  }

  for (let i = 1; i <= num2; i++) {
    if (num2 % 1 == 0) count2++;
  }
  return count1 === count2 ? 1 : 0;
}
