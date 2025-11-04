export const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  power: (a, b) => Math.pow(a, b),
};

export const add = (a,b)=>operations.add(a,b);
export const subtract = (a,b)=>operations.subtract(a,b);
export const multiply = (a,b)=>operations.multiply(a,b);
export const power = (a,b)=>operations.power(a,b);


  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  power: (a, b) => Math.pow(a, b),
};

document.addEventListener('DOMContentLoaded', () => {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const operation = document.getElementById('operation');
  const resultDiv = document.getElementById('result');
  const calcBtn = document.getElementById('calcBtn');
  const resetBtn = document.getElementById('resetBtn');

  calcBtn.addEventListener('click', () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const op = operation.value;

    if (isNaN(a) || isNaN(b)) {
      resultDiv.textContent = '⚠️ Entrez deux nombres valides !';
      return;
    }

    const result = operations[op](a, b);
    resultDiv.textContent = `Résultat : ${result}`;
  });

  resetBtn.addEventListener('click', () => {
    num1.value = '';
    num2.value = '';
    operation.selectedIndex = 0;
    resultDiv.textContent = 'Entrez vos nombres 👇';
  });
});