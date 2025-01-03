// function BooleanNum(num){
//     return num % 10 ===0 ? true : false;
// }

// let result = Boolean(26)

// console.log(result)


const num = n => {
    if(n % 10 ===0 ){
        return true;
    }
    else{
        return false;
    }
}
console.log(num(40))