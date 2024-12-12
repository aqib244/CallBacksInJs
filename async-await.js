//  async function getData(name) {
//     return new Promise((resolve, reject) => {
//       console.log("Fetching Name...");
//       setTimeout(() => {
//         console.log("Name Found:", name);
//         resolve("Success!");
//       }, 3000);
//     });
//   }


//   (async function allData(){
//     await getData("Aqib");
//     await getData("Saad");
//     await getData("Haris");
//     await getData("Fahad");
//     await getData("Rehan");
//     await getData("Wasay");
//     await getData("Usman");
//     await getData("Umer");
//   })();

const anotherData = async ()=>{
let  data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
  
  })
 actualData = await data.json();
   console.log(actualData);
}

anotherData();


//for post request;
  // body: JSON.stringify({
    //   title: 'Name',
    //   body: 'Aqib',
    //   userId: 66,
    // }),
    // headers: {
    //   'Content-type': 'application/json; charset=UTF-8',
    // },