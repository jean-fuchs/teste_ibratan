function question1() {
  var quatro = [4];
  var l1 = ["primeiro", "segundo", 3, quatro, 5, 6];

  console.log(l1[1]);
  console.log(l1[2]);
  console.log(l1[3]);
  console.log(l1[4]);
  console.log(l1[5]);

  return `O array vai imprimir no console: <br>
  'segundo', pois o array começa com a posição 0 <br>
  3, que é a posição 2 do array <br>
  [4], que é o conteúdo presente dentro da variável quatro <br>
  5, que é a posição 4 no array <br>
  6, que é a posição 5 no array`;
}

export default question1;
