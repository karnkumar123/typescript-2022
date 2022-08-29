const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const addButton = document.getElementById('btn') as HTMLButtonElement;
const sumFunc = (num1: number, num2: number) => { 
    return +num1 + +num2;
}

addButton.addEventListener('click', () => {
    let sum = sumFunc(+num1.value, +num2.value);
    console.log(sum);
})
