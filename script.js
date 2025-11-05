import { add, subtract, multiply, power } from './math.js';

document.addEventListener('DOMContentLoaded', () => {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const operation = document.getElementById('operation');
  const resultDiv = document.getElementById('result');
  const calcBtn = document.getElementById('calcBtn');
  const resetBtn = document.getElementById('resetBtn');

  const operations = { add, subtract, multiply, power };

  calcBtn.addEventListener('click', () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const op = operation.value;

    if (isNaN(a) || isNaN(b)) {
      resultDiv.textContent = 'Entrez deux nombres valides !';
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
