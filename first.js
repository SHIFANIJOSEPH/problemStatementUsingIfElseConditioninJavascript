let m=prompt("enter the value of m:" );
let n=prompt("enter the value of n:");

function sumOfCubes(m,n){
    if(m>n)
{
    return 0;
}
    let sum=0;
for(let i=m;i<=n;i++){
    sum+=i*i*i;
}
    return sum;

}
console.log(sumOfCubes(m,n));

