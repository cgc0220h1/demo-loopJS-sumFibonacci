function sumFibo() {
    let n = 0;
    let n1 = 1;
    let fibo = 0;
    let display = '';
    let index = 1;
    let sum = 0;
    let num = +document.getElementById('num-input').value;
    while (index <= num) {
        n = n1;
        n1 = fibo;
        fibo = n + n1;
        display = display + fibo + ", ";
        sum += fibo;
        index++;
    }
    document.getElementById('displayNums').innerHTML = display;
    document.getElementById('displaySum').innerHTML = sum;
}