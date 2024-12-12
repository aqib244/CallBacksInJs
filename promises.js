function getData(name) {
  return new Promise((resolve, reject) => {
    console.log("Fetching Name...");
    setTimeout(() => {
      console.log("Name Found:", name);
      resolve("Success!");
    }, 3000);
  });
}

//Promise chain
getData("Aqib")
  .then((e) => {
    console.log(e);
    return getData("Danish");
  })
  .then((e) => {
    console.log(e);
    return getData("Noman");
  })
  .then((e) => {
    console.log(e);
  });
