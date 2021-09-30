var api = "http://localhost:3000"

const Editar = async(id) => {
  const dadosEdicao = await axios.patch(`${api}/aluguel/${id}`);
  window.location.href = '/frontend/pages/form.html';

  dadosEdicao.data.map((item) => { 
    var form = document.getElementById('form');
    var inputName = document.createElement("input");
    var inputData = document.createElement("input");
    var inputValor = document.createElement("input")
    var inputStatus = document.createElement('select')

    var nome = document.createTextNode(`${item.nome}`);
    var data = document.createTextNode(`${item.data}`);
    var valor = document.createTextNode(`${item.valor}`);
    var status = document.createTextNode(`${item.status}`);
  
    form.appendChild(inputName);
    inputName.appendChild(nome);
   

    
  });
};


  
  
















