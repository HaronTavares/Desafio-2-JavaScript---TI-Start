async function gerarDados(idCep, idRua, idBairro, idCidade, idEstado){
    let cep = document.querySelector(`#${idCep}`).value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    let fetchDados = await fetch(url);
    let DadosJson = await fetchDados.json();

    document.getElementById(idRua).value = DadosJson['logradouro'];     //Rua
    document.getElementById(idBairro).value = DadosJson['bairro'];      //Bairro
    document.getElementById(idCidade).value = DadosJson['localidade'];  //Cidade
    document.getElementById(idEstado).value = DadosJson['uf'];          //Estado
}

export {gerarDados};