function displayTemperature(response){
    let TemperatureInput= document.querySelector("#current-temperature")
    let temperature= Math.round(response.data.temperature.current)
    let cityInput = document.querySelector("#city-input");
    cityInput.innerHTML=response.data.city;
    TemperatureInput.innerHTML=temperature;
}
function enterCity(event) {
  event.preventDefault();
  let inputType = document.querySelector("#search-input");
  let city=inputType.value
  let apiKey= "ab4d0edb5b9372141t1b46d08bocdf06"
  let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
 axios.get(apiUrl).then(displayTemperature)

}
   
    function formatDay(date){
    let day=date.getDay();
    let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday" ]
    let formattedDay = days[day];
    let hour=date.getHours();
    let minute= date.getMinutes();
    return `${formattedDay} ${hour}:${minute}, `
    }
    let country = document.querySelector("#form-search");
    country.addEventListener("submit", enterCity);
    let currentDateElement= document.querySelector("#current-date")
    let currentDate= new Date();
    currentDateElement.innerHTML= formatDate(currentDate);

