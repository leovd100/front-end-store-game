// buscaDados.js
const buscaDados = async () => {
  let url = "http://localhost:8081/games";
  const dados = await fetch(url);
  const jsonData = await dados.json();

  return jsonData;
};

export default buscaDados;
