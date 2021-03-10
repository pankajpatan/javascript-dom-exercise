function evennumber(){
    var newarr=[];
  for (let i =100; i>=0; i--) {
    if(i%2==0){
   newarr.push(i)
   
    }
  }
  return newarr
  }
  
  var array = evennumber()
  console.log(array)