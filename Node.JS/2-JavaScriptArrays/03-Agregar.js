const notas=[9,8,6];
let media= (notas[0]+notas[1]+notas[2])/notas.length;
console.log(media);
//Agregando elementos al final 
//notas.push(10);
notas.unshift(10);
media= (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log(media);