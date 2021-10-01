var api = "http://localhost:3000";

const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    const inputName = document.getElementById("nome");
    const valueNome = inputName.value;

    const inputData = document.getElementById("data");
    const valueData = inputData.value;

    const inputValor = document.getElementById("valor");
    const valueValor = inputValor.value;

    const selectStatus = document.getElementById("status");
    const valueStatus = selectStatus.value;

    var dados = {
        nome: valueNome,
        data: valueData,
        valor: valueValor,
        status: valueStatus
    };

    await axios.post(`${api}/aluguel`, dados);
})

