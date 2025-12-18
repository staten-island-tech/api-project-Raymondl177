import './style.css'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

async function getData(agent) {
  try {
    //go get data
    const response = await fetch(`https://valorant-api.com/v1/agents/${agent}`);
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
console.log(getData(Reyna));