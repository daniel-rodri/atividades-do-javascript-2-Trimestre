const notas = [10,6.5,8,7.5];

let somadasnotas = 0;

notas.forEach(function(notas){
  somadasnotas += notas;
});

const media = somadasnotas / notas.length;

console.log(`Amedia das notas e ${media}`);
