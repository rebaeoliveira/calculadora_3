let n1 = ""
let n2 = ""
let operator = ""
let res = ""
// adicionar número na operação
function addNumber(number) {
    // verificação de caso tiver um número na tela pra operação, mas nao o operador
    if (res != "" && operator === "") {
        // chama função limpar tela
        erase()
    }
    if (operator === "") {
        document.getElementById('display').innerHTML += number;
        n1 += number;  
    } else if (operator != "" && n2 === "") {
        document.getElementById('display').innerHTML = "";
        document.getElementById('display').innerHTML = number;
        n2 += number;
    } else {
        document.getElementById('display').innerHTML = number;
        n2 += number;
    }
}
// Limpa a tela após adicionar o número
function erase() {
    n1 = ""
    n2 = "" 
    operador = ""
    res = ""    
    document.getElementById('display').innerHTML = "";
}
function addOperator(operatorSelected) {
  if (n1 != "") {
    operator = operatorSelected;
  }  
} 
function calculate(event) { 
  // Evita a atualização da página
    event.preventDefault()
  if (n1 !== "" && n2 !== "" && operator !== ""){
      switch (operator) {
        case '+':
            res = parseInt(n1) + parseInt(n2);
        break;
        case '-':
            res = parseInt(n1) - parseInt(n2);
        break;
        case '*':
            res = parseInt(n1) * parseInt(n2);
        break;   
        case '/':
            res = parseInt(n1) / parseInt(n2);
        break;
        case '^':
            res = parseInt(n1) ** parseInt(n2)
        break;
        default:
        break;
      }
    } else if(n1 !== "" && n2 === "" && operator === "raiz") {
            res = parseInt(n1) ** (1/2)
    }
  document.getElementById('display').innerHTML = "" +  res;
  n1 = "" + res
  n2 = ""
  operator = ""
}








