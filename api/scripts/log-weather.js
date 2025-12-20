#!/usr/bin/env node
const APIKey = process.env.OPENWEATHER_API_KEY || '173d97e5b6b61d6379067eecc1cb5036';
const city = process.argv[2] || 'London';

(async () => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${APIKey}&units=imperial`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Fetch error:', err);
    process.exitCode = 1;
  }
})();
