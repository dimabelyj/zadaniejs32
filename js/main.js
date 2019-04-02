let num1 = 2;
let num2 = 5;
let x = num1;
let y = num2;

function por(x, y) {
    if (x > y) {
        console.log(x);
        return (x, y);
    } else if (x < y) {
        console.log(y);
        return (x, y);
    }
}
//console.log(por(num1, num2));
por(x, y);