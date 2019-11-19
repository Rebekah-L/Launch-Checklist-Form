// Write your JavaScript code here!
window.addEventListener("load", function(){
   let button = document.getElementById("formSubmit")
   button.addEventListener("click", function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value==="" || copilotName.value==="" || fuelLevel.value==="" || cargoMass.value==="") {
         window.alert("All fields are required!");
         event.preventDefault();
      } else if (!isNaN(pilotName.value)){
         window.alert("No numbers allowed in the Pilot Name field.")
         event.preventDefault();
      } else if (!isNaN(copilotName.value)){
         window.alert("No numbers allowed in the Co-Pilot Name field.")
         event.preventDefault();
      } else if (isNaN(fuelLevel.value)){
         window.alert("Expect a number in the Fuel Level field.")
         event.preventDefault();
      } else if (isNaN(cargoMass.value)){
         window.alert("Expect a number in the Cargo Mass field.")
         event.preventDefault();
      };
      })
})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
