function primeNumberChecker(num) {
    let divider = 2; 
    let maxDivider = Math.sqrt(num);
    let prime = true;
    while (prime && (divider <= maxDivider)) {
        if (num % divider == 0) {
            prime = false;
        }
        divider++;
    }
    console.log(prime);
}
primeNumberChecker(7);
primeNumberChecker(8);