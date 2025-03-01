

for(var i=0; i<10; i++){
  setTimeout(()=> console.log(i),0)
}


var obj1 = {
    address : "Mumbai,India",
    getAddress: function(){
    console.log(this.address); 
  }
}
   
var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
obj2.getAddress();  
