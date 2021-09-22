var axios = require('axios');


function pegarDados (){
    const inputName = document.querySelector("#nome");
    const nome = inputName.value

    const inputData = document.querySelector("#data");
    const data = inputData.value

    const inputValor = document.querySelector("#valor");
    const valor = inputValor.value

    const selectStatus = document.querySelector("#status");
    const status = selectStatus.value

    module.exports = () => {
        const data = { aluguel: [] }
        // Create 1000 users
        for (let i = 0; i < 1000; i++) {
          data.aluguel.push({ id: i, nome: `aluguel${nome}` })
        }
        return data
      }
}



