var api = "http://localhost:3000"

const list = async () => {
  var aluguel = await axios.get(`${api}/aluguel`);
  
  aluguel.data.map((item) => { 
    var table = document.getElementById('table');
    var tr = document.createElement("tr");
    var td0 = document.createElement('td')
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement('td');
    
    var id = document.createTextNode(`${item.id}`);
    var nome = document.createTextNode(`${item.nome}`);
    var data = document.createTextNode(`${item.data}`);
    var valor = document.createTextNode(`${item.valor}`);
    var status = document.createTextNode(`${item.status}`);

    var inputId = document.createElement('input');

    
    table.appendChild(tr);
    tr.appendChild(td0);
    td0.appendChild(inputId);
    inputId.value = `${item.id}`


    table.appendChild(tr);
    tr.appendChild(td1);
    td1.appendChild(nome);

    tr.appendChild(td2);    
    td2.appendChild(data);

    
    tr.appendChild(td3);    
    td3.appendChild(valor);

    
    tr.appendChild(td4);    
    td4.appendChild(status);

    tr.appendChild(td5);    
    td5.innerHTML = `
      <button id="editar" onclick="Editar(${item.id})"><i class="fas fa-edit"></i><button>
      <button id="excluir" onclick="Delete(${item.id})"><i class="far fa-trash-alt"></i></button>
    `
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

const Delete = async(id) => {
  await axios.delete(`${api}/aluguel/${id}`);
}

const Editar = async(id) => {
  const aluguel = await axios.get(`${api}/aluguel/${id}`);
  window.location.href = '/frontend/pages/form.html'
  console.log(aluguel) 
  
}















