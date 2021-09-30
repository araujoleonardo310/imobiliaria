var api = "http://localhost:3000"

const list = async () => {
  var aluguel = await axios.get(`${api}/aluguel`);
  
  aluguel.data.map((item) => { 
    var table = document.getElementById('table');
    var tr = document.createElement("tr");
    var td0 = document.createElement("td");
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
  
    table.appendChild(tr);
    tr.appendChild(td0);
    td0.appendChild(id);

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















