// let numbers = [0, 10, 5, 27, 3, 10, 12]


// let even_numbers = numbers.filter(number => {
//     return number % 2 === 0
// });

let numbers = [
    {number: 12, type: "even"},
    {number: 0, type: "even"},
    {number: 2, type: "even"},
    {number: 5, type: "odd"},
    {number: 27, type: "odd"},
    {number: 6, type: "even"},
    {number: 59, type: "odd"}
]

let even_numbers = numbers.filter(number => number.type === "even");

console.log(even_numbers)


