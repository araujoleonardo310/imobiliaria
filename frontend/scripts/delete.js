var api = "http://localhost:3000"

const Delete = async(id) => {
  await axios.delete(`${api}/aluguel/${id}`);
}















