function calc() {
    let n1 = document.getElementById("op1").value
    let n2 = document.getElementById("op2").value
    let op = document.getElementById("kod").value
    let result;
    switch(op){
        case "+":
            result = parseFloat(n1)+parseFloat(n2);
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;  
            break;
        case "/":
            result = n1 / n2;
            break;
        case "^":
            result = n1 ** n2;
            break;     
    }
    document.getElementById("result").value = result;
}