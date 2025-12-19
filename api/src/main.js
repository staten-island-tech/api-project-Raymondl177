import './style.css'

async function getData(cityName, APIKey) {
  try {
    //go get data
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`);
    if (response.status != 200) {
      throw new Error('Failed to fetch data');
    } else {
      const data = await response.json();
      console.log(data);
      document.getElementById('api-response').textContent = data.name;
    }
  } catch (error) {
    console.log(error);
  }
}
console.log(getData('London','173d97e5b6b61d6379067eecc1cb5036'));