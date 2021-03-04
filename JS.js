function salvar(content){
    content = "Nome: "+document.getElementById('nome').value+
        "\nTelefone: "+document.getElementById('tele').value+
        "\nData Nascimento: "+document.getElementById('data').value+
        "\nCPF: "+document.getElementById('cpf').value+
        "\nEndereço: "+document.getElementById('end').value+
        "\nEmail: "+document.getElementById('email').value

    
    var a = document.createElement('a');
    var blob = new Blob([content]);
    a.href = window.URL.createObjectURL(blob);
    a.download = "agenda.txt";
    a.click(); 
}