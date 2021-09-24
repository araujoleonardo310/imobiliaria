var api = "http://localhost:3000"

const list = async () => {
  var aluguel = await axios.get(`${api}/aluguel`);

  aluguel.data.map((item) => { 
    var table = document.getElementById('table');
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td4 = document.createElement("td");
    var nome = document.createTextNode(`${item.nome}`);
    var data = document.createTextNode(`${item.data}`);
    var valor = document.createTextNode(`${item.valor}`);
    var status = document.createTextNode(`${item.status}`);

    table.appendChild(tr);
    tr.appendChild(td1);
    td1.appendChild(nome);


    tr.appendChild(td2);    
    td2.appendChild(data);

    
    tr.appendChild(td3);    
    td3.appendChild(valor);

    
    tr.appendChild(td4);    
    td4.appendChild(status);
   
  });
};

list();


const Create = async () => {
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
};

function enviar() {
  return Create();
};


















/*
function pegarDados (){
    

    module.exports = () => {
        const data = { aluguel: [] }
        // Create 1000 users
        for (let i = 0; i < 1000; i++) {
          data.aluguel.push({ id: i, nome: `aluguel${nome}` })
        }
        return data
      }
}

*/



