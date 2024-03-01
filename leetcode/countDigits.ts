function countDigits(num: number): number {
    let count = 0;
    let val = num;

    while (val > 0) {
        const digit = val % 10;

        // Avoid division by zero
        if (digit !== 0 && num % digit === 0) {
            count++;
        }

        val = Math.floor(val / 10);
    }

    return count;
}
