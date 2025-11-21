var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    var dubplicate = false;
    for(let j = i+1;j<numbers.length;j++){
        if(numbers[i]===numbers[j]){
            dubplicate = true;
            break;
        }
    }
    if(!dubplicate){
        uniqueNumbers.push(numbers[i]);
}}

console.log(uniqueNumbers);
