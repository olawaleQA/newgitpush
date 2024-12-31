// const myHouse = {
//     location: "lekki",
//     structure:"Mansion", 
//     colour: "Peach", 
//     materials: "cement", 
//     isRoofing: "Pop", 
//     worth: 20000000,



// console.log(myHouse.isRoofing)



const car = {
    Name: "camry",
    Year: 2023,
    brand: "Toyota",
    Types: ["Suv", "Hybrid", "Sedan"],
    models: ['corolla', 'Tundra', 'Camry', 'Highlander'],
    addModels: function(name){
        car.models.push(name)
    }

}
car.addModels('Avalon')
car.colour = 'Blue'
console.log(car)