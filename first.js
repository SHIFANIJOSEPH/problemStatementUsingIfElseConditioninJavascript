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
console.log(sumOfCubes(2,4));
