function validateExpression(expression, input) {
    expression = expression.replace(' ', '')
    let num1 = 0
    let num2 = 0
    let op = -1
    let i = 0
    while(!Number.isNaN(Number(expression[i]))) {
      num1 = num1 * 10 + Number(expression[i])
      i++
    }
    op = expression[i++]
    while(!Number.isNaN(Number(expression[i]))) {
      num2 = num2 * 10 + Number(expression[i])
      i++
    }
    let ans = 0
    switch(op) {
      case '+':
        ans = num1 + num2
        break
      case '-':
        ans = num1 - num2
        break
      case '*':
        ans = num1 * num2
        break
      case '/': 
        ans = num1 / num2
        break
      default:
        ans = 0
    }
    console.log(num1, num2, op)
    return ans===input?'True':'False'
  }
  
  function createExpression() {
    const num1 = parseInt(Math.random() * 100)
    const num2 = parseInt(Math.random() * 100)
    const op = parseInt(Math.random() * 4)
    let ans = null
    let operator = ''
    switch(op) {
      case 0:
        ans = num1 + num2
        operator = '+'
        break
      case 1:
        ans = num1 - num2
        operator = '-'
        break
      case 2:
        ans = num1 * num2
        operator = '*'
        break
      case 3: 
        ans = num1 / num2
        operator = '/'
        break
      default:
        ans = 0
    }
    
    return {expression: `${num1} ${operator} ${num2}`, ans}
  }
  
  for (let i = 0;i<10;i++){
  const {expression, ans} = createExpression()
  console.log(expression, ans)
  const input1 = ans
  const input2 = ans + 1
  console.log(validateExpression(expression, input1))
  console.log(validateExpression(expression, input2))
  }