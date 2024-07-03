const prompt = require("prompt-sync")({ sigint: true });

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let resultado;

function check(num) {
    if (isNaN(num)) {
        console.log('Por favor, insira um número válido.');
        process.exit();
    } else {
        return true;
    }
}

async function main() {
    let numero1 = Number(prompt("Digite o primeiro numero: "));
    let numero2 = Number(prompt("Digite o segundo numero: "));
    let operacao = prompt("Digite + para adição , - para subtração , * para multiplicação , / para divisão, % para porcentagem ");

check(numero1);
check(numero2);

    switch (operacao) {
        case '+':
            resultado = (numero1 + numero2);
            break;
        case '-':
            resultado = (numero1 - numero2);
            break;
        case '*':
            resultado = (numero1 * numero2);
            break;
        case '/':
            resultado = (numero1 / numero2);
                if (numero2 ==0){
                    console.log("erro: divisão por zero")
                    process.exit();
                } else {
                    resultado = (numero1 / numero2);
                break;
                }
        case "%":
            resultado = (numero1 * numero2) / 100;
            break;
            default:
            resultado = "sua operação é invalida!"
            break;
    }
    console.log("O resultado de sua operação é:" , resultado);
};

rl.close();

main();

