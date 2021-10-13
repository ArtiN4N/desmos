var doc = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(doc);

let count = 0;
for (i = 0; i < 20; i++) {
  for (j = 0; j < 20; j++) {
    count++;
    
    calculator.setExpression({ id: 'graph' + count, latex: 'y=(' + 0.5 * i + ', ' + 0.5 * j + ')' });
  }
}

console.log("he");
