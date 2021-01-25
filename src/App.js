
import React from 'react';
const api = {
  key: "2e9922a52a6a7d8f4a39aec7f02e72cb",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
           type="text"
           className="search-box"
           placeholder="Search...">
           </input>
        </div>
      </main>
    </div>
  );
}

export default App;
