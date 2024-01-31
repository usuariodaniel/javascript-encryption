function criptografar(){

  let entrada = document.getElementById('entrada').value;

  let criptografia = entrada.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

  document.getElementById('output').innerText = criptografia
}

function descriptografar(){

  let entrada = document.getElementById('entrada').value;

  let descriptografia = entrada.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

  document.getElementById('output').innerText = descriptografia
}

function copiarTexto(){
  let copiar = document.getElementById('output').value;
  
  try {
    navigator.clipboard.writeText(copiar)
    alert('Texto copiado para a área de transferencia')
  } catch (error) {
    console.error('Falha ao copiar: ', error);    
  }
}
