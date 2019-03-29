let num1 = 2;
let num2 = 5;

function por(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else if (num1 < num2) {
        console.log(num2);
        return por;
    }
}