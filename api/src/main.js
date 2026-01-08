import "./style.css";

const APIKey = "8a38ff2384c1fd445fd1ce0fd1680b58";
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
         <div class="card">
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
        <p class="condition"><strong>Conditions:</strong> ${
          data.weather[0].description
        }</p>
      </div>
    `
      );
    }
  } catch (error) {
    console.log(error);
  }
}
getData("New York");
getData("California");
getData("London");
getData("Italy");
getData("France");
getData("quebec");
getData("Germany");
getData("Tokyo");
getData("Sydney");
getData("Beijing");
getData("Moscow");
getData("Berlin");
getData("Madrid");
getData("Rome");
getData("Dubai");
getData("Singapore");
getData("Hong Kong");
getData("Bangkok");
getData("Istanbul");
getData("Cairo");
getData("Mumbai");
getData("Seoul");

async function searchCity() {
  const cityInput = document.getElementById("cityInput");
  const container = document.getElementById("resultsContainer");
  async function doSearch() {
    const searchTerm = cityInput.value.toLowerCase();
    container.innerHTML = "";
    try {
    //go get data
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${APIKey}&units=imperial`
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      container.insertAdjacentHTML(
        "beforeend",
        `
         <div class="card">
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
        <p class="condition"><strong>Conditions:</strong> ${
          data.weather[0].description
        }</p>
      </div>
    `
      );
    }
  } catch (error) {
    console.log(error);
  }
    if (container.innerHTML === "") {
      container.innerHTML = "<p class='no-results'>No city found.</p>";
      return;
    }
  }
  cityInput.addEventListener("input", doSearch);
}
searchCity();
