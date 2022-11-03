
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



function mudar_cor1() {
  document.getElementsByClassName("cartao")[0].style.backgroundImage = ' radial-gradient(circle at 87.5% 12.5%, #ff9000 0, #ff7a00 12.5%, #ff6319 25%, #ff482a 37.5%, #ff2833 50%, #ea0039 62.5%, #d6003e 75%, #c40043 87.5%, #b40049 100%)';
  document.getElementsByClassName("cartao")[0].style.borderStyle = "hidden";
}


function mudar_cor2() {
    document.getElementsByClassName("cartao")[0].style.backgroundImage = 'radial-gradient(circle at 80.42% 6.56%, #b175ff 0, #6c5bff 25%, #0040d7 50%, #0026a0 75%, #00106f 100%)';
    document.getElementsByClassName("cartao")[0].style.borderStyle = "hidden";
  }

function mudar_cor3() {
    document.getElementsByClassName("cartao")[0].style.backgroundImage = 'radial-gradient(circle at 87.5% 12.5%, #a3f300 0, #7fec00 16.67%, #55e200 33.33%, #00d705 50%, #00cb26 66.67%, #00c037 83.33%, #00b645 100%)';
    document.getElementsByClassName("cartao")[0].style.borderStyle = "hidden";
}

function mudar_cor4() {
   document.getElementsByClassName("cartao")[0].style.backgroundImage = 'radial-gradient(circle at 80.42% 6.56%, #ff00d9 0, #ff00e1 12.5%, #ff00e3 25%, #f800e0 37.5%, #cc00d7 50%, #9f14cb 62.5%, #741ec0 75%, #4523b5 87.5%, #0026ab 100%)';
   document.getElementsByClassName("cartao")[0].style.borderStyle = "hidden";
}

function mudar_cor5() {
    document.getElementsByClassName("cartao")[0].style.backgroundImage = 'radial-gradient(circle at 80.42% 6.56%, #bf5aff 0, #7646ff 25%, #0030d7 50%, #001ca3 75%, #000574 100%)';
    document.getElementsByClassName("cartao")[0].style.borderStyle = "hidden";
 }
 

