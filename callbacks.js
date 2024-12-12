/*
//callback a function
function sum(a,b){
    console.log(a+b); 
}
const calculator = (a,b,callback)=>{
    console.log(a + b);
    callback(a,b);
}
calculator(5,9,sum);
*/




//Callback Hell...Nested Callback;
function getData(name, nextdata) {
  setTimeout(() => {
    console.log("Fetching Name...");
    setTimeout(() => {
      console.log("Name Found:", name);
      if (nextdata) {
        nextdata();
      }
    }, 3000);
  }, 2000);
}




getData("Aqib", () => {
  getData("Rehman", () => {
    getData("Saleem", () => {
      getData("Haris");
    });
  });
});


