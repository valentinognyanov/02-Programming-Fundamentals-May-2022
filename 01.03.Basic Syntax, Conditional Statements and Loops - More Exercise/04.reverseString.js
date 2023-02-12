function reverseString(string) {
    let reverse = string.split("").reverse().join("");
    console.log(reverse);
}
reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");