var api = "http://localhost:3000"

const Editar = async(id) => {
  const dadosEdicao = await axios.patch(`${api}/aluguel/${id}`);
  window.location.href = '/frontend/pages/form.html';

  dadosEdicao.data.map((item) => { 
    document.getElementById("nome").value = `${item.nome}`;

    
  });
};

list();
  
  
















