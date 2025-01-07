// for (let i = 1; i <= 20; i++){
//     for (j = 1; j <= 20; j++){
//         console.log(i + j + ' X ' + ' = ' + i * j);
//     }
// }
function multiplicationsTable(n){
    for (let i = 1; i <= 20; i++){
        let ourResult = n * i;
        console.log(`${n} X ${i} = ${ourResult}`)
    }
}     
multiplicationsTable(2)
