
///////menu lateral/////////////
document.getElementById("contato").addEventListener("click", function() {

    
    ga('send', 'event', "menu", "entre_em_contato", "link_externo");
   
    
});

document.getElementById("pdf").addEventListener("click", function() {

    
    ga('send', 'event', "menu", "download_pdf", "download_pdf");
   
    
});
//////////////////////////////



////////analise/////////////////
if ($("#lorem").length > 0) {

    document.getElementById("lorem").addEventListener("click", function() {

        ga('send', 'event', "analise", "ver_mais", "Lorem");

    });
};

if ($("#ipsum").length > 0) {

    document.getElementById("ipsum").addEventListener("click", function() {

        ga('send', 'event', "analise", "ver_mais", "Ipsum");
    
    });
};

    
if ($("#dolor").length > 0) {

    document.getElementById("dolor").addEventListener("click", function() {
        
        ga('send', 'event', "analise", "ver_mais", "Dolor");
        
    });
};
///////////////////////////////////



////////////sobre////////////////

var verf1 = 0;
var verf2 = 0;
var verf3=0;
var verf4=0;

if ($("#telefone").length > 0) {

   
    document.getElementById("telefone").addEventListener('keyup', function(){
        
        if (verf1==0){ 

            //Esse if é para enviar apenas a primeira inserção de caracter, nessa situação, o input estaria preenchido, 
            //e o Analitics não ficaria recebendo estatísticas a cada caracter digitado/apagado. Mas caso seja a intenção, bastaria dispensar o If e as variaveis 'verf'
            ga('send', 'event', "contato", "telefone", "preencheu");
            verf1++;
        }

    });
};

if ($("#email").length > 0) {

    document.getElementById("email").addEventListener('keyup', function(){

        if (verf2==0){
            ga('send', 'event', "contato", "email", "preencheu");
            verf2++;
        }

    });
};



if ($("#nome").length > 0 ) {

    document.getElementById("nome").addEventListener('keyup', function(){

        if (verf3==0){
            ga('send', 'event', "contato", "nome", "preencheu");
            verf3++;
        }

    });
};


if ($("#aceito").length > 0 ) {

    document.getElementById("aceito").addEventListener('change', function(){

        if (verf4 ==0){
            ga('send', 'event', "contato", "aceito", "preencheu");
            verf4++;
        }

    });
};
/////////////////////////////
////O envio do Analitics referente ao envio do formulário está em main.js, na linha 63