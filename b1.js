// test of primality

function prime (n) {
  if(n<=0){
    return false;
  } else if (n===1 || n===2 || n===3) {
    return true;
  }else if (n%2 ===0 || n%3===0) {
    return false;
  } else {
    for (i = 5; i < Math.sqrt(n) + 1; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0){
          return false;
      }
    }
  return true;
  }
}

console.log(prime(77));
console.log(prime(7));
console.log(prime(13));
console.log(prime(5));
console.log(prime(15));
console.log(prime(653));