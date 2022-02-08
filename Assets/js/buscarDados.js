export const buscaDados = async(value) => {
    let url = value
    const dados = await fetch(url)
    const jsonData = await dados.json();
    
    return jsonData    
}


