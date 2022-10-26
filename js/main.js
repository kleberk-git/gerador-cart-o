function dados_input_numero_cartao(){
	
    var cartao_com_mask = document.getElementById("numero_cartao").value;
    cartao_com_mask = cartao_com_mask.replace(/\D/g,""); // Permite apenas dígitos
    cartao_com_mask = cartao_com_mask.replace(/(\d{4})/g, "$1 "); // Coloca um ponto a cada 4 caracteres
    cartao_com_mask = cartao_com_mask.substring(0, 19)// Limita o tamanho
    document.getElementById("numero").innerHTML = cartao_com_mask;
    return cartao_com_mask;
}

function dados_input_nome_titular(){
	
    var nome = document.getElementById("nome_titular").value;
    document.getElementById("nome").innerHTML = nome.toUpperCase();
}

function dados_input_expirar(){
	
    var data = document.getElementById("expiracao").value;
    data = data.replace(/\D/g,""); // Permite apenas dígitos
    data = data.replace(/(\d{2})/g, "$1/"); // Coloca um ponto a cada 4 caracteres
    data = data.replace(/\/$/, ""); // Remove o ponto se estiver sobrando

    document.getElementById("expirar").innerHTML = data;
    return data;
}

function dados_input_cvv(){
	
    var cvv = document.getElementById("cvv").value;
    cvv = cvv.replace(/\D/g,""); // Permite apenas dígitos
    document.getElementById("c-cvv").innerHTML = cvv;

    return cvv;
}
