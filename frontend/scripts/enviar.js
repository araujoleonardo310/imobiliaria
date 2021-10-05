var api = "http://localhost:3000";

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
        await axios.post(`${api}/aluguel`, dados);
       
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










