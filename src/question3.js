// Cria uma função que recebe array como parâmetro
function question3(array) {
  // Declarando uma variável do tipo var que recebe a quantidade de itens do array
  var n = array.length;

  // Percorre cada item do array e adiciona 1 no i ao final
  for (var i = 0; i < array.length; i++) {
    // Percorre a quantidade de itens do array menos a posição atual do loop acima
    for (var j = 1; j < n - i; j++) {
      // Verifica se a posição anterior do array é maior que a atual
      if (array[j - 1] > array[j]) {
        // Atribui o valor anterior do array a variável auxiliar
        var aux = array[j - 1];
        // Atribui à posição anterior o valor atual
        array[j - 1] = array[j];
        // Atribui à posição atual o valor anterior
        array[j] = aux;
      }
    }
  }
  // Retorna o array organizado em ordem crescente
  return array;
}

function question() {
  return `Ordena de forma crescente os valores do array passados por parâmetro
  percorrendo item a item verificando se o valor anterior é maior que o valor atual`;
}

export default question;
