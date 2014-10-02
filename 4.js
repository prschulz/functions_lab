function add (a,b) {
  return a + b;
}

function sub (a,b) {
  return a - b;
}

function combine (a,b,bool) {
  if (bool === true){
    return add(a,b);
  } else {
    return sub(a,b);
  }
}

var answer = combine(3,3,true);
console.log(answer);
