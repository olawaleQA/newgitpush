let numbers = [1, 3, 4, 5, 6, 9, 10, -12, -14, -3, -5, -9, 20]

function filterNegativeNum(arr){
    return arr.filter(num => num <= 0);
}
console.log(filterNegativeNum(numbers))