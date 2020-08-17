let fs = require('fs');
let matriz=[];

/* fs.readFile('matriz.txt', 'utf-8', (err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    let filas = data.split("\n");
    for(i=0;i<=filas.length-1;i++){
        matriz[i] = filas[i].split(" ")
    }
    console.log(matriz)
  }
}); */
let data = fs.readFileSync('matriz.txt', 'utf-8');
let filas = data.split("\n");
    for(i=0;i<=filas.length-1;i++){
        matriz[i] = filas[i].split(" ")
    }
    
module.exports =matriz