function sum() {
    let a = Number(document.getElementById('number1').value);
    let b = Number(document.getElementById('number2').value);
    let i = 0;
    if (b > a) {
        i = a;
        for (let j = a; j <= b; j++) {
            a += j;
        };
    };
    let sum = a - i;
    document.getElementById('result').innerHTML = sum;
}


