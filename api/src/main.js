import './style.css'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

/* async function getData(poke) {
  try {
    //go get data
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    if (response.status != 200) {
      throw new Error('Failed to fetch data');
    } else {
      const data = await response.json();
      console.log(data);
      document.getElementById('api-response').textContext = data.name;
    }
  } catch (error) {
    console.log(error);
  }
}
getData('gengar'); */