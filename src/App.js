
import React, { useState } from 'react';
const api = {
  key: "2e9922a52a6a7d8f4a39aec7f02e72cb",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
 const [query, setQuery] = useState('');
 const [weather, setWeather] = useState({}); 

 const search = evt => {
   if (evt.key === "Enter") {
     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
     .then(res => res.json())
     .then(result => {

     setWeather(result);
     setQuery('');
     });

   }
 }

 const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month= months[d.getMonth()];
  let year = d.getFullYear(); 
  let result = ""+day +" "+date+" "+month+" "+year;
  return result;
}



  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
           type="text"
           className="search-box"
           placeholder="Search...">
           onChange={e => setQuery(e.target)} 
           value={query}
           onKeyPress={search} 
           ></input>
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15°C
            <div className="weather">Sunny</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
