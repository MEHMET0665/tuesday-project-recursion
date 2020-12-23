// given a number print in an increasung order and decreasing order using recursion ex:5
// 1
// 12
// 123
// 1234
// 12345
// 12345
// 1234
// 123
// 12
// 1
// const printInOrder=(n)=>{
// helper('',1,n)

// }
// const helper=(n, inc,stop)=>{
//   if (inc>stop){
//     return
//   }
//   n+=inc;
//   console.log(n)
//   helper(n,inc+1,stop)
//   console.log(n)
// }
// printInOrder(10)
//time Complexity O(n)
//Space ComplexityO(n)

//print from 1 to n given using recursion ex:5
// 1
// 2
// 3
// 4
// 5
// const printUptoN=(n)=>{
//   for (i=1; i<=n; i++)
//   console.log(i)
// }
// printUptoN(5)

// const printUptoN=(n)=>{
//  if (n===1){
//    console.log(n);
//    return
//  }
//   printUptoN(n-1)
//    console.log(n)
// }
// printUptoN(6)
//time Complexity O(n)
//Space ComplexityO(n)

// Create an array of arrays thet has increasing number in order using recursion
//Ex:input 3
// ans:[1]
// [1,2]
// [,2,3]
  const ans=[]
  const builtPyramid=(n)=>{
    if (1===n){
      ans.push([1])
      return
    }
    builtPyramid(n-1)
    const temp=[]
    for( i=1;i<=n; i++){
      temp.push(i)
    }
    ans.push(temp)
    return ans
  }

 

console.log(builtPyramid(5))