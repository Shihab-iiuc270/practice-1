 function monthlySavings(arr,number){
    if(typeof(arr)!= "object" || typeof(number)!= "number" || arr.length ==0){
        return "invalid input";
    }

    let total = 0;
    for(let i=0;i<arr.length;i++){
         if (arr[i] >= 3000) {
            arr[i] = arr[i] - (arr[i] * 0.20); // deduct 20% tax
        }
        total += arr[i];
    }
    const savings = total - number;

    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}
        

var monthlyIncomes = [900, 2700, 3400];
var livingCost = 10000;
console.log(monthlySavings(monthlyIncomes, livingCost));