import './style.css'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

async function getData(game, appid) {
  try {
    //go get data
    const response = await fetch(`https://steamcommunity.com/market/pricehistory?appid=${appid}&market_hash_name=${game}`);
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
console.log(getData('AWP | Dragon Lore (Factory New)', 730));