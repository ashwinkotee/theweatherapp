const getWeather = async(place) =>{
   const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=9ZGY3KY8APHUN8DC4P8RR87GN&contentType=json`;

   let fullJsonData,timezone,address,temperature,conditions,description;

   await fetch(url)
   .then(response => response.json())
   .then(jsonData => {
      fullJsonData = jsonData;
      timezone = JSON.stringify(jsonData.timezone)
      address = JSON.stringify(jsonData.resolvedAddress);
      temperature = JSON.stringify(jsonData.currentConditions.temp);
      conditions = JSON.stringify(jsonData.currentConditions.conditions);
      description = JSON.stringify(jsonData.description);
   });

   console.log(timezone,address,temperature,conditions,description)

   document.getElementById("timeZone").textContent = timezone;
   document.getElementById("address").textContent = address;
   document.getElementById("temperature").textContent = `${temperature} °C`;
   document.getElementById("condition").textContent = conditions;
   document.getElementById("description").textContent = description;
}


const searchButton = document.getElementById("searchButton")
const inputText = document.getElementById("placeName")

inputText.addEventListener('keydown', (event) => {
   if(event.key == 'Enter'){
      event.preventDefault();
      getWeather(inputText.textContent);
   }
 });




