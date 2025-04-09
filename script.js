const score = document.getElementById('score');
const payConditions = document.getElementById('payConditions');
const clientAge = document.getElementById('clientAge');
const payOne = document.getElementById('payOne');
const payTwo = document.getElementById('payTwo');
const payThree = document.getElementById('payThree');
const button = document.getElementById('button');
const display = document.getElementById('display');

function payConditionsInfo() {
    window.alert(
        "(5) Comprovantes recentes de pagamento a outros fornecedores superior " +  
        "ao valor médio dos pedidos realizados pelo cliente. \n\n" +
        "(3-4) Comprovantes com valor maior ou igual ao valor médio de pedido.\n\n" +
        "(2) Comprovantes com valor inferior ao valor médio de pedido.   \n\n" +
        "(1) Ausência de comprovação.");
}

function clientAgeInfo() {
    window.alert(
        "(5) Cliente a mais de dois anos realizando pedidos frequentemente (semanal). \n\n" +
        "(3-4) Cliente a menos de dois anos e/ou realiza pedidos esporadicamente (mensal ou quinzenal).  \n\n" +
        "(2) Cliente sem histórico de pedido nos últimos dois meses. \n\n" +
        "(1) Cliente sem histórico de pedido.");
}

button.addEventListener('click', () => {
    const scoreValue = parseInt(score.value);
    const payConditionsValue = parseInt(payConditions.value);
    const clientAgeValue = parseInt(clientAge.value);
    const payOneValue = parseFloat(payOne.value);
    const payTwoValue = parseFloat(payTwo.value);
    const payThreeValue = parseFloat(payThree.value);


    if (isNaN(scoreValue)) {
        display.innerHTML = 'Score inválido. Insira um número.';
        return;
    }
    if (scoreValue < 1 || scoreValue > 1000) {
        display.innerHTML = 'Score deve estar entre 1 e 1000.';
        return;
    }

    if (isNaN(clientAgeValue)) {
        display.innerHTML = 'Valor para histórico inválido';
        return;
    }

    if (isNaN(payConditionsValue)) {
        display.innerHTML = 'Valor para capacidade de pagamento inválido';
        return;
    }

    const payCalculate = (payOneValue + payTwoValue + payThreeValue) / 3;
    let payLimit = 0 ;
    if (isNaN(payCalculate)) {
        display.innerHTML = 'Valores de pagamento inválidos.';
        return;
    }

    if ([payConditionsValue, clientAgeValue].some(val => val < 1 || val > 5)) {
        display.innerHTML = 'Classificações devem estar entre 1 e 5.';
        return;
    }


    let scorePoint;
    if (scoreValue <= 299) scorePoint = 1 * 0.3;
    else if (scoreValue <= 499) scorePoint = 2 * 0.3;
    else if (scoreValue <= 699) scorePoint = 3 * 0.3;
    else if (scoreValue <= 899) scorePoint = 4 * 0.3;
    else scorePoint = 5 * 0.3;

    
    let payHistoric;
    if (payCalculate < 500) {
        display.innerHTML = 'Média de pagamento abaixo do mínimo.';
        return;
    } else if (payCalculate <= 749) payHistoric = 1;
    else if (payCalculate <= 1249) payHistoric = 2;
    else if (payCalculate <= 1999) payHistoric = 3;
    else if (payCalculate <= 2999) payHistoric = 4;
    else payHistoric = 5;

    const payHistoricPoint = payHistoric * 0.3;
    const payConditionsPoint = payConditionsValue * 0.3;
    const clientAgePoint = clientAgeValue * 0.1;

    const total = scorePoint + payHistoricPoint + payConditionsPoint + clientAgePoint;

    if (total >= 4) { 
        payLimit = payCalculate * 3;
        display.innerHTML = `Pontuação: ${total.toFixed(2)} - Cliente com baixo risco. ` +
            `Oferecer uma linha de crédito flexível seria interessante. ` +
            ` Valor sugerido para linha de crédito: ${Math.ceil(payLimit.toFixed(2))} `;
    } else if (total >= 3) {
        payLimit = payCalculate * 2;
        display.innerHTML = `Pontuação: ${total.toFixed(2)} - Cliente com médio risco. ` +
            `Linha de crédito requer acompanhamento.` +
            ` Valor sugerido para linha de crédito: ${Math.ceil(payLimit.toFixed(2))} `;
    } else {
        display.innerHTML = `Pontuação: ${total.toFixed(2)} - Cliente com alto risco. ` +
            ` Não é aconselhável oferecer linha de crédito.`;
    }
});