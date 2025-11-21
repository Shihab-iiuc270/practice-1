const arr =[18,3,8,6,2,7,4,1,11,9,10,20,15,14,13,12,16,19,17,5];


for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
        }
}
}
console.log(arr);