function aumentaTamanho() {
    if (tamanhoSenha < 20) {
            // tamanhoSenha = tamanhoSenha + 1;
            tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}
const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';

campoSenha.value = letrasMaiusculas;
function geraSenha(){
    let senha = '' ”;
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

console.log(checkbox[0].checked);
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
}
