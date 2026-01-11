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
<div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition">
  <p class="text-xl font-semibold text-cyan-400 mb-2">
    ${data.name}
  </p>

  <p class="text-3xl font-bold mb-4">
    ${Math.round(data.main.temp)}°F
  </p>

  <div class="space-y-1 text-slate-300">
    <p>Feels like: ${Math.round(data.main.feels_like)}°F</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind: ${data.wind.speed} mph</p>
    <p class="capitalize">${data.weather[0].description}</p>
  </div>
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
  const noResults = document.querySelector(".hidden");

  async function doSearch() {
    const value = cityInput.value.trim().toLowerCase();

    if (value === "") {
      container.innerHTML = "";
      noResults.style.display = "none";

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
      return;
    }

    container.innerHTML = "";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKey}&units=imperial`
      );

      if (response.status !== 200) {
        noResults.style.display = "block";
        return;
      }

      const data = await response.json();
      noResults.style.display = "none";

      container.insertAdjacentHTML(
        "beforeend",
        `
<div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition">
  <p class="text-xl font-semibold text-cyan-400 mb-2">
    ${data.name}
  </p>

  <p class="text-3xl font-bold mb-4">
    ${Math.round(data.main.temp)}°F
  </p>

  <div class="space-y-1 text-slate-300">
    <p>Feels like: ${Math.round(data.main.feels_like)}°F</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind: ${data.wind.speed} mph</p>
    <p class="capitalize">${data.weather[0].description}</p>
  </div>
</div>
`
      );
    } catch (error) {
      noResults.style.display = "block";
    }
  }

  cityInput.addEventListener("input", doSearch);
}

searchCity();
