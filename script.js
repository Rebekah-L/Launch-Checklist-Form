// Write your JavaScript code here!
window.addEventListener("load", function(){
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then( function(json){
         const mainDiv = document.getElementById("missionTarget");
         let index = 2;
         mainDiv.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `
      })
   })
   let button = document.getElementById("formSubmit")
   button.addEventListener("click", function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      if (pilotName.value==="" || copilotName.value==="" || fuelLevel.value==="" || cargoMass.value==="") {
         window.alert("All fields are required!");
         event.preventDefault();
      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         window.alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      } else if (fuelLevel.value < 10000){
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML="Shuttle NOT Ready For launch";
         launchStatus.style.color="red";
         pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML=`Co-Pilot ${copilotName.value} is ready for launch`;
         fuelStatus.innerHTML="Fuel level too low for launch";
         fuelStatus.style.color="red";
      } else if (cargoMass.value > 10000){
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML="Shuttle NOT Ready For launch";
         launchStatus.style.color="red";
         pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML=`Co-Pilot ${copilotName.value} is ready for launch`;
         cargoStatus.innerHTML="Too much mass for the shuttle to take off.";
         cargoStatus.style.color="red";
         event.preventDefault();
      } else {
         launchStatus.innerHTML="Shuttle is ready For launch!";
         launchStatus.style.color="green";
      }
         

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
