// grab both of our elements, the button and the div and assign them to variables
// let getButton = document.getElementById('getUrl');
let technologies = document.getElementById('technologies');

    
// IN CASE WE WANT TO GO BACK TO BUTTON EVENT LISTENER
//   for (let object of obj.Results[0].Result.Paths[0].Technologies) {
//     //React, Angular JS, Express
//       if (object.Name === "React" || object.Name === "Angular JS" || object.Name === "Express" ) {
//         let newDiv = document.createElement('div');
//         newDiv.innerHTML = `
//           <h2>${object.Name}</h2>
//           <p>${object.Description}</p>
//           <p>Link: <a href='${object.Link}'>${object.Link}</a></p>
//         `
//         technologies.append(newDiv);
//       }
//     }
//   })

function testFunc(){
  //fetch call to be here (refer to #2 below)
  for (let object of obj.Results[0].Result.Paths[0].Technologies) {
  //React, Angular JS, Express
    if (object.Name === "React" || object.Name === "Angular JS" || object.Name === "Express" ) {
      let newDiv = document.createElement('div');
      newDiv.innerHTML = `
        <h2>${object.Name}</h2>
        <p>${object.Description}</p>
        <p>Link: <a href='${object.Link}'>${object.Link}</a></p>
      `
      technologies.append(newDiv);
    }
  }
}
testFunc();


// 2. initialize a fetch request to the API
  // getting a single domain: 
  // https://api.builtwith.com/v20/api.json?KEY=65e8ccdc-f71f-4876-a1cc-c9c024a419dc&LOOKUP=builtwith.com
  // thinking our call would look like
  // fetch('https://api.builtwith.com/v20/api.json?KEY=65e8ccdc-f71f-4876-a1cc-c9c024a419dc&LOOKUP=builtwith.com')
  //  .then(data => data.json())
  //  .then(data => // do our for loop
// fetch(`https://api.builtwith.com/v20/api.json?KEY=65e8ccdc-f71f-4876-a1cc-c9c024a419dc&LOOKUP=${window.location.hostname}`)
//   .then(data => { 
//     return data.json()
//   })
//   .then(data => {
//     for (let object of data.Results[0].Result.Paths[0].Technologies) {
//       //React, Angular JS, Express
//         if (object.Name === "React" || object.Name === "Angular JS" || object.Name === "Express" ) {
//           let newDiv = document.createElement('div');
//           newDiv.innerHTML = `
//             <h2>${object.Name}</h2>
//             <p>${object.Description}</p>
//             <p>Link: <a href='${object.Link}'>${object.Link}</a></p>
//           `
//           technologies.append(newDiv);
//         }
//       }
//   })
