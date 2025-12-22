import "./style.css";

const APIKey = "173d97e5b6b61d6379067eecc1cb5036";

async function getData(cityName) {
  try {
    //go get data
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
    const data = await response.json();
    const container = document.getElementById("resultsContainer");
    container.insertAdjacentHTML(
      "beforeend",
      `
         <div class="result-card">
           <p class="city-name"><strong>City:</strong> ${data.name}</p>
        <p class="temperature"><strong>Temp:</strong> ${Math.round(
          data.main.temp
        )}°F</p>
        <p class="feels-like"><strong>Feels Like:</strong> ${Math.round(
          data.main.feels_like
        )}°F</p>
        <p class="humidity"><strong>Humidity:</strong> ${
          data.main.humidity
        }%</p>
        <p class="wind"><strong>Wind:</strong> ${data.wind.speed} mph</p>
        <p class="condition"><strong>Conditions:</strong> ${data.weather[0].description}</p>
      </div>
    `
    );
  }
  } catch (error) {
    console.log(error);
  }
}
getData("New York");
getData("Staten Island");
getData("California");
getData("London");
getData("Italy");
getData("France");
getData("quebec");
getData("Germany");
getData("Spain");
getData("Portugal");
getData("Greece");
getData("Japan");
getData("China");
getData("Russia");
getData("India");
getData("Brazil");
getData("Argentina");
getData("Chile");
getData("Egypt");
getData("Nigeria");
getData("Kenya");
getData("Australia");
getData("New Zealand");
getData("Indonesia");
getData("Thailand");
getData("Vietnam");
getData("Philippines");
getData("Turkey");
getData("Saudi Arabia");
getData("United Arab Emirates");

function searchCity() {
const cityInput = document.getElementById("cityInput").value;
const weatherContainer = document.getElementById("resultsContainer");
function doSearch() {
    const searchTerm = cityInput.value.toLowerCase();
    weatherContainer.innerHTML = "";
    const filteredWeather = weatherData.filter((weather) =>
      weather.name.toLowerCase().includes(searchTerm)
    );
    if (filteredWeather.length === 0) {
      weatherContainer.innerHTML = "<p class='no-results'>No weather found.</p>";
      return;
    }
    filteredWeather.forEach((weather) => inject(weather));
}
searchInput.addEventListener("input", doSearch);
}
searchCity();