function apagarLuz() {
    var colorOscuro = '#343a40';
    var letraClara = '#ffffff';
    document.body.style.background = colorOscuro;
    document.body.style.color = letraClara;
}

function sumar() {
    var valor1 = document.getElementById("num1").value;
    var valor2 = document.getElementById("num2").value;
    try
    {
        if (valor1 == "" || valor2 == "") throw "Debes ingresar todos los valores numéricos a operar...";

        if (isNaN(valor1) || isNaN(valor2)) throw "Debes ingresar solo números para operar...";

        valor1 = Number(valor1);
        valor2 = Number(valor2);
        document.getElementById("resultado").innerHTML = valor1 + " + " + valor2 + " = " + (valor1 + valor2);
    }
    catch(err) 
    {
        document.getElementById("error").innerHTML = err;
    }
    
}

function restar() {
    var valor1 = parseInt(document.getElementById("num1").value);
    var valor2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = valor1 + " - " + valor2 + " = " + (valor1 - valor2);
}

function multiplicar() {
    var valor1 = parseInt(document.getElementById("num1").value);
    var valor2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = valor1 + " x " + valor2 + " = " + (valor1 * valor2);
}

function dividir() {
    var valor1 = parseInt(document.getElementById("num1").value);
    var valor2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = valor1 + " / " + valor2 + " = " + (valor1 / valor2);
}

function saludar() {
    var fecha = new Date();
    document.getElementById("saludo").innerHTML = "  " + fecha;
    var tiempo = setTimeout(function() { saludar()},1000);
}

//Consumir API mindicador.cl
$(document).ready(function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://mindicador.cl/api',true);
    xmlhttp.send();

    var uf = 0;
    var dolar = 0;
    var euro = 0;

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);
            uf = data.uf.valor;
            dolar = data.dolar.valor;
            euro = data.euro.valor;
        }
        document.getElementById("valorUF").innerHTML = data.uf.nombre + ": " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(uf);
        document.getElementById("valorDolar").innerHTML = data.dolar.nombre + ": " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(dolar);
        document.getElementById("valorEuro").innerHTML = data.euro.nombre + ": " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(euro);
    }
});



