function rpn(equation) {
  const stack = new Stack();
  const operators = [];
  equation.split(" ").forEach(value => {
    const number = +value;
    if(isNaN(number)) {
      operators.push(value);
    } else {
      stack.push(number);
    }
  });
  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];

    const operand1 = stack.pop();
    const operand2 = stack.pop();
    let result;

    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      case "%":
        result = operand1 % operand2;
        break;

      default:
        throw "operator not supported";
    }
    stack.push(result);
  }
  return stack.pop();
}


console.log('result: ' + result);
