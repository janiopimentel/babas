/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...

$(document).ready(function() { 

$("#qtLista").select();    
    
    
$("#qtJogadores").change(function() {
    var qtLista     = $("#qtLista").val();
    var qtJogadores = $("#qtJogadores").val();
    if ((qtLista>0) && (qtJogadores>0)) {
    $("#iniciar").show();
    } else {
    alert("Prencha os campos corretamente!");
    $("#qtLista").select();  
    }
                
});
    
$("#recomecar").click(function() {
    location.reload();
});
    
$("#iniciar").click(function() {
    
    $("#iniciar").hide();
    $("#sortearNovo").show();
    $("#recomecar").show();
    
                    
var sorteados = [];
var valorMaximo = $("#qtLista").val();
var qtJogadores = $("#qtJogadores").val();
var n           = 0;
var p           = 1;
    
$("#maisum").click(function() {
    var valorMaximo = $("#qtLista").val();
    var valorMaximo = Math.ceil(valorMaximo)+1;
    $("#qtLista").val(valorMaximo);
    document.getElementById('resultados').innerHTML += valorMaximo + ', ';
});

function criarUnico() {
    var valorMaximo = $("#qtLista").val();
    var sugestao = Math.ceil(Math.random() * valorMaximo);
    while (sorteados.indexOf(sugestao) >= 0) {
        sugestao = Math.ceil(Math.random() * valorMaximo);
    }
    sorteados.push(sugestao);
    if (sugestao<10) {
    sugestao = '0'+sugestao;    
    }
    return sugestao;
}
document.getElementById('resultados').innerHTML = '';

for (var i = 0; i < valorMaximo; i++) {
    document.getElementById('resultados').innerHTML += criarUnico() + ', ';
}
sorteados = [];
var sortearNovo = document.getElementById('sortearNovo');
var novoNumero = document.getElementById('novoNumero'+p);
novoNumero.innerHTML += '1o. Baba:<br>';
sortearNovo.addEventListener('click', function () {
    var novoNumero = document.getElementById('novoNumero'+p);
    var valorMaximo = $("#qtLista").val();
    n++;
    if (n<10) {
    n = '0'+n;    
    }
    novoNumero.innerHTML += n + ') ' + criarUnico() + '<br>';
    if (n == qtJogadores) {
        p++;
        var novoNumero = document.getElementById('novoNumero'+p);
        novoNumero.innerHTML += p+'o. Baba:<br>';
        n = 0;
       
    }
    if (sorteados.length == valorMaximo) {
        if(confirm('Lista Completa!!!!')) { 
            $("#sortearNovo").hide();
            $("#iniciar").hide();
            $("#recomecar").show();
        } else { return false; }
    }
});
    
});
});