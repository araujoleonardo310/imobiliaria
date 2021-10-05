var api = "http://localhost:3000";

var id = localStorage.getItem("ID");

const Create = async () => {

  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
  })
  
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

  await axios.put(`${api}/aluguel/${id}`, dados);
};


function Valida(){
  let nome = document.getElementById('nome').value;
  let data = document.getElementById('data').value;
  let valor = document.getElementById('valor').value;

  if(!(nome == '') && !(data == '') && !(valor == '')) {
      return Create();
  } else {
      document.getElementById('nome').focus();
      document.getElementById('data').focus();
      document.getElementById('valor').focus();
      
  }
}

const List = async () => {
  var request = await axios.get(`${api}/aluguel`)
  var filter = request.data.filter((item) => item.id == id);

  document.getElementById("nome").value = filter[0].nome;
  document.getElementById("data").value = filter[0].data;
  document.getElementById("valor").value = filter[0].valor;
  document.getElementById("status").value = filter[0].status

  document.getElementById("nome").onchange = function () { }
  document.getElementById("data").onchange = function () { }
  document.getElementById("valor").onchange = function () { }
  document.getElementById("status").onchange = function () { }
}

List();
















