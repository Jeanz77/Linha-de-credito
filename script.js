        const score = document.getElementById('score')
            function scoreInfo() {
                window.alert(
                 `1) Péssimo - 0 a 299 \n\n` +
                 `2) Ruim - 300 a 499 \n\n` +
                 `3) Regular - 500 a 699 \n\n` +
                 `4) Bom - 700 a 899 \n\n` +
                 `5) Excelente - 900 a 1000 `)
            }
        const payHistoric = document.getElementById('payHistoric')
            function payHistoricInfo() {
                window.alert(
                 "1) Péssimo - Valor médio dos últimos pedidos abaixo de R$500,00. \n\n" +
                 "2) Ruim - Valor médio dos últimos pedidos de R$500,00 a R$750,00. \n\n" +
                 "3) Regular - Valor médio dos últimos pedidos de R$750,00 a R$1.500,00. \n\n" +
                 "4) Bom - Valor médio dos últimos pedidos de R$1.500,00 a R$3.000,00. \n\n" +
                 "5) Excelente - Valor médio dos últimos pedidos acima de R$3.000,00. ")   
                 
            }
        const payConditions = document.getElementById('payConditions')
            function payConditionsInfo() {
                window.alert(
                 "1) Péssimo - Cliente com protestos ou sem comprovação de faturamento \n\n" +
                 "2) Ruim - Comprovante de faturamento inferior ao valor médio dos pedidos  \n\n" +
                 "3) Regular - Comprovante de faturamento igual ao valor médio dos pedidos   \n\n" +
                 "4) Bom - Comprovante de faturamento duas vezes maior ao valor médio dos pedidos  \n\n" +
                 "5) Excelente - Comprovante de faturamento três vezes maior ao valor médio dos pedidos")
            }     
        const clientAge = document.getElementById('clientAge')
            function clientAgeInfo() {
                window.alert(
                 "1) Péssimo - Sem histórico de compra e/ou CNPJ com menos de um ano de existência \n\n" +
                 "2) Ruim - Sem histórico de compra nos últimos dois meses  \n\n" +
                 "3) Regular - Compra esporadicamente ao menos duas vezes por mês  \n\n" +
                 "4) Bom - Compra semanalmente ou é cliente a mais de dois anos fazendo compras regularmente   \n\n" +
                 "5) Excelente - Compra semanalmente ou é cliente a mais de quatro anos fazendo compras regularmente  ")
            }
        const button = document.getElementById('button')
        const display = document.getElementById('display')


        const buttonAction = button.addEventListener('click', () => {
        const scorePoint = 0  

            if (score >= 1 && score <= 299) {
                scorePoint = 1 * 0.3
            }

            else if (score >= 300 && score <= 499) {
                scorePoint = 2 * 0.3

            }

            else if (score >= 500 && score <= 699) {
                scorePoint = 3 * 0.3
            }

            else if (score >= 700 && score <= 899) {
                scorePoint = 4 * 0.3
            }

            else if (score >= 900 && score <= 1000) {
                scorePoint = 5 * 0.3
            }
            

        const payHistoricPoint = payHistoric.value * 0.3
        const payConditionsPoint = payConditions.value * 0.3
        const clientAgePoint = clientAge.value * 0.10
            
            const total = scorePoint + payHistoricPoint + payConditionsPoint + clientAgePoint
            
         

            if (total >= 4 && total <= 5) {
                display.innerHTML = `Pontuação: ${total.toFixed(2)} - Cliente com baixo risco. ` +
                `Oferecer uma linha de crédito flexível seria interessante para crescimento do ` + 
                `volume de pedidos e fidelização do cliente com grande potencial.`
            }
            
            else if (total >= 3 && total <= 3.9) {
                display.innerHTML = `Pontuação: ${total.toFixed(2)} - Cliente com médio risco. ` +
                `Linha de crédito pode ser interessante para essa faixa de cliente, porém é necessário ` +
                `acompanhamento para garantir que os pagamentos estejam em dia e o limite de crédito condiza com ` +
                `o volume de compras realizado. Eventualmente a linha de crédito poderá ` + 
                `ser reduzida ou ampliada a depender desses fatores. `
            }
            else if (total >= 1 && total <= 2.9 ) {
                display.innerHTML = `Pontuação: ${total.toFixed(2)} - Cliente com alto risco.` +
                `Não é aconselhável oferecer linha de crédito para os clientes que se enquadram nesta faixa.`
            }
            else {
                display.innerHTML = `Valor incorreto. Por favor, preencha novamente.`
            }
         
          

        })