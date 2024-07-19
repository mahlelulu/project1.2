function displayTemperature(response){
    let TemperatureInput= document.querySelector("#current-temperature")
    let temperature= Math.round(response.data.temperature.current)
    let cityInput = document.querySelector("#city-input");
    let descriptionElement = document.querySelector("#description");
    let humidityInput=document.querySelector("#humidity");
    let windSpeedInput=document.querySelector("#wind-speed");
    TemperatureInput.innerHTML=temperature;
    descriptionElement.innerHTML=response.data.condition.description;
    cityInput.innerHTML=response.data.city;
    humidityInput.innerHTML=`${response.data.temperature.humidity}%`;
    windSpeedInput.innerHTML= response.data.temperature.wind.speed;

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

