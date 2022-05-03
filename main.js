const descriptografia = ["a", "e", "i", "o", "u"];
const criptografia = ["ai", "enter", "imes", "ober", "ufat"];
let resultado = "";
let saida = document.getElementById("saida");
let input = document.getElementById("entrada"); 
function criptografar(){
    let texto = input.value;
    if(input != ""){
        resultado = texto.replace(/a|e|i|o|u/ig, function (x){
            if(x == "a" || x == "A"){
                return criptografia[0];
            }
            else if(x == "e" || x == "E"){
                return criptografia[1];
            }
            else if(x == "i" || x == "I"){
                return criptografia[2];
            }
            else if(x == "o" || x == "O"){
                return criptografia[3];
            }
            else if(x == "u" || x == "U"){
                return criptografia[4];
            }
        })
        entrada.value = "";
        saida.value = resultado;
    }
}

function descriptografar(){
    let texto = input.value;
    if(input != ""){
        resultado = texto.replace(/ai|enter|imes|ober|ufat/ig, function (x){
            if(x == "ai"){
                return descriptografia[0];
            }
            else if(x == "enter"){
                return descriptografia[1];
            }
            else if(x == "imes"){
                return descriptografia[2];
            }
            else if(x == "ober"){
                return descriptografia[3];
            }
            else if(x == "ufat"){
                return descriptografia[4];
            }
        })
        entrada.value = "";
        saida.value = resultado;
    }
}
function copiar(){
    navigator.clipboard.writeText(resultado);
    saida.value = "";
}
const chk = document.getElementById("chk");
chk.addEventListener("change", () => {
    document.body.classList.toggle("dark");
})