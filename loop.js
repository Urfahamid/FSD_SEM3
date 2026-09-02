// let i=0;
// for( ;i<5;i++)
// {
//     console.log(i);
// }
// let sum=0;
// for(let i=0;i<=9;i++,sum+=i);
// console.log(sum);
// let sum=0;
// for(let i=0;i<=9;i++,sum+=i);
// console.log(sum);
// let x=4,y=0,z;
// while(x>=0)
// {
//     x--;
//     y++;
//     if(x==y)
//         continue;
//     else
//         console.log(x,y)

// }
let arr = [10, 20, 30, 40, 50];

for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(arr); 