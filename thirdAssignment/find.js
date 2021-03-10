function findnum(arr,n) {
  var index = -1
  arr.find(function(item,ind) {
    if(item===n){
      index = ind
      return true;
    }
    else {
      return false;
    }
 
  })
  return index ;
}
var arr = [5,4,9,8,4,6,9,45,89,50,21,27,541]
var found = findnum(arr,45)
console.log(found)