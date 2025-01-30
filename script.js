        const score = document.getElementById('score')
        const payConditions = document.getElementById('payConditions')
        const clientAge = document.getElementById('clientAge')
        const payOne = document.getElementById("payOne")
        const payTwo = document.getElementById("payTwo")
        const payThree = document.getElementById("payThree")
        const button = document.getElementById('button')
        const display = document.getElementById('display')
        
        function payConditionsInfo() {
                window.alert(
                 "1) Péssimo - Cliente com protestos ou sem comprovação de faturamento \n\n" +
                 "2) Ruim - Comprovante de faturamento inferior ao valor médio dos pedidos  \n\n" +
                 "3) Regular - Comprovante de faturamento igual ao valor médio dos pedidos   \n\n" +
                 "4) Bom - Comprovante de faturamento duas vezes maior ao valor médio dos pedidos  \n\n" +
                 "5) Excelente - Comprovante de faturamento três vezes maior ao valor médio dos pedidos")
            }     
        
        function clientAgeInfo() {
                window.alert(
                 "1) Péssimo - Sem histórico de compra e/ou CNPJ com menos de um ano de existência \n\n" +
                 "2) Ruim - Sem histórico de compra nos últimos dois meses  \n\n" +
                 "3) Regular - Compra esporadicamente ao menos duas vezes por mês  \n\n" +
                 "4) Bom - Compra semanalmente ou é cliente a mais de dois anos fazendo compras regularmente   \n\n" +
                 "5) Excelente - Compra semanalmente ou é cliente a mais de quatro anos fazendo compras regularmente  ")
            }
        


        const buttonAction = button.addEventListener('click', () => {
          let scorePoint = 0
          let payHistoric = 0  

            if (score.value >= 1 && score.value <= 299) {
                scorePoint = 1 * 0.3
            }

            else if (score.value >= 300 && score.value <= 499) {
                scorePoint = 2 * 0.3

            }

            else if (score.value >= 500 && score.value <= 699) {
                scorePoint = 3 * 0.3
            }

            else if (score.value >= 700 && score.value <= 899) {
                scorePoint = 4 * 0.3
            }

            else if (score.value >= 900 && score.value <= 1000) { 
                scorePoint = 5 * 0.3
            }
            
            else {
                display.innerHTML = `Valor incorreto para score`
            }

        const payCalculate = (payOne.value + payTwo.value + payThree.value) / 3 
        
            if (payCalculate >= 500 && payCalculate <= 749) {
               payHistoric = 1 * 0.3
            }

           else if (payCalculate >= 750 && payCalculate <= 1249) {
              payHistoric = 2 * 0.3
            }    

           else if (payCalculate >= 1250 && payCalculate <= 1999) {
              payHistoric = 3 * 0.3
            }    

           else if (payCalculate >= 2000 && payCalculate <= 2999) {
              payHistoric = 4 * 0.3
            }

           else if (payCalculate >= 3000) {
              payHistoric = 5 * 0.3
            }    

          else {

           display.innerHTML = `Valor incorreto ou inferior ao minimo para linha de credito`

           }
        
        const payHistoricPoint = payHistoric * 0.3
        const payConditionsPoint = payConditions * 0.3
        const clientAgePoint = clientAge * 0.10
        
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