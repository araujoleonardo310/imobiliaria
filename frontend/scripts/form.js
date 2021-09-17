var axios = "http://localhost:3000";


function cadastrar (){
    const inserir = async () =>{
        var nome = document.getElementById("nome");
        var nomeValue = nome.value;
    
        await axios.post(`${axios}/aluguel`, {nome: nome.value});
    }
}

cadastrar();


