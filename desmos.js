var doc = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(doc);
calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });
calculator.setExpression({ id: 'graph2', latex: 'y=x^4' });

console.log("he");
