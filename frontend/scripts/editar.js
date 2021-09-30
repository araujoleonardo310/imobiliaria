var api = "http://localhost:3000"

var idPost

const Editar = async(id) => {
 
   idPost = await axios.delete(`${api}/aluguel/${id}`); 
  window.location.href = '/frontend/pages/editar.html'
};

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

    await axios.put(`${api}/aluguel/2`, dados);
};

function atualizaDados() {
  return Create();
}




  
  
















