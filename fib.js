var a=[];
function fib(n){
  if(a[n-1]!=null){
    if(n>1){
    return a[n-1]+a[n-2];
    }else{
      return 1;
      }
    }else{
  if(n>1){
    a[n-1]=fib(n-1)
    a[n-2]=fib(n-2)
    return a[n-1]+a[n-2];
    }else{
      return 1;
      }
  }
}
fib(43);
