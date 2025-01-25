let numbers = [0, 10, 5, 27, 3, 10, 12]

let result1 = numbers.reduce((counter,current) => {
    if(current % 5 == 0){
        counter += 1
    }
    return counter

}, 0);

console.log(result1)



let numbers_pair = [
    {number: 12, type: "square"},
    {number: 0, type: "cube"},
    {number: 2, type: "square"},
    {number: 5, type: "square"},
    {number: 27, type: "square"},
    {number: 6, type: "cube"},
    {number: 59, type: "cube"},
    {number: 5, type: "square"},
    {number: 27, type: "square"},
]

let result2 = numbers_pair.reduce((counter, current) => {
    if(current.type == "cube"){
        counter += 1
    }
    return counter

}, 0);

console.log(result2)

