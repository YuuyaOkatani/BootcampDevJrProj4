
function calc(op){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var output = `${num1} ${op} ${num2} `; 

    document.getElementById("output").value = eval(output);

    /// sem a necessidade de usar o switch nem o if else e nem usar funções distintas
    /// hehe uma função que faz tudo **risadas maléficas** 

    var newHistory = "<div class='last-operations' >"+   output + "= " + eval(output) + "</div>" // filho 
    var history = document.getElementById("history")

    // filhos => div dentro de div

    history.innerHTML = newHistory + history.innerHTML ;
    if(history.children.length > 10){
        history.removeChild(history.childNodes[10]); // remover um div de um array (childnodes)
    }

    

}






/*


function calc(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var output = Number(num1) + Number(num2); 
    document.getElementById("output").value = output;   

}

--------------------------------------------------------------------------------------------------------------------------------

// tentativa 1

function soma(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output = num1 + num2; 
    document.getElementById("output").value = output;   

}

function sub(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output = num1 - num2; 
    document.getElementById("output").value = output;
}

function mult(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output = num1 * num2; 
    document.getElementById("output").value = output;
}

function div(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output = num1 / num2; 
    document.getElementById("output").value = output;
}

--------------------------------------------------------------------------------------------------------------------------------

// tentativa 2

function calc(op){
    switch(op) {
        case '+':
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var output = num1 + num2; 
            document.getElementById("output").value = output;
        break;

        case '-':
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var output = num1 - num2; 
            document.getElementById("output").value = output;
        break;

        case '*':
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var output = num1 * num2; 
            document.getElementById("output").value = output;
        break;

        case '/':
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var output = num1 / num2; 
            document.getElementById("output").value = output;
        break;

        
    }

}


--------------------------------------------------------------------------------------------------------------------------------

function calc(op){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var output = `${num1} ${op} ${num2} `; 
    output = eval(output)
    document.getElementById("output").value = output;

    /// sem a necessidade de usar o switch nem o if else e nem usar funções distintas
    /// hehe uma função que faz tudo **risadas maléficas** 

    var newHistory = "<div>" + num1+ op + num2 + " = " + output + "</div>"

    document.getElementById("history").innerHTML = newHistory + document.getElementById("history").innerHTML ;

    

}




--------------------------------------------------------------------------------------------------------------------------------
function calc(op){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var output = `${num1} ${op} ${num2} `; 
    output = eval(output)
    document.getElementById("output").value = output;

    /// sem a necessidade de usar o switch nem o if else e nem usar funções distintas
    /// hehe uma função que faz tudo **risadas maléficas** 

    var newHistory = "<div>" + num1+ op + num2 + " = " + output + "</div>"

    document.getElementById("history").innerHTML += newHistory  ;

    

}
    */