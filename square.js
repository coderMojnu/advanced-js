const numbers = [1, 2, 3, 4, 5, 6];
// const output = [];
// for(let i=0; i < numbers.length; i++){
//     const element = numbers[i];
//     const newNumbers = element*element;
//     output.push(newNumbers);
// }
// console.log(output);

// const result =  numbers.map(function(element){
//     return element * element;
// })
// console.log(result);
// const result = numbers.map(x => x * x);
// console.log(result);

const bigger = numbers.filter(x => x > 2);
console.log(bigger);

const Find = numbers.find(x => x > 2);
console.log(Find);