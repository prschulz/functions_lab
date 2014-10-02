var arr1 = [11,3,6];
var arr2 = [4,5,8,9,14];

function merge (a1,a2) {
  merged = a1.concat(a2);
  merged.sort(function(a,b){return a-b;});
  return merged;
}

merge(arr1,arr2);

console.log(merged);
