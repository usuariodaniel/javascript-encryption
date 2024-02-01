function criptografar(){

  let entrada = document.getElementById('input').value;

  entrada = entrada.toLowerCase();

  let criptografia = entrada.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

  document.getElementById('output').innerText = criptografia

  document.getElementById('output').style.fontFamily = 'JetBrains Mono'

  document.getElementById('output').style.fontSize = '1.5rem'


}

function descriptografar(){

  let entrada = document.getElementById('input').value;

  let descriptografia = entrada.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

  document.getElementById('output').innerText = descriptografia  
}

function copiarTexto(){
  const copiar = document.getElementById('output').innerText;

  try {
    navigator.clipboard.writeText(copiar);
    alert('Texto copiado para a área de transferência')

    input.value = '';
    output.innerText = 'Nenhuma Mensagem Encontrada';

  } catch (erro) {
    alert('Erro ao copiar o texto: ', erro)
    
  }

 }