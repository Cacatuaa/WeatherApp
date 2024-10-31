import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import WeatherToday from './components/WeatherToday.jsx';
import WeatherForecast from './components/WeatherForecast.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  return (
    <div className="App">
      <SearchBar setWeather={setWeather} setForecast={setForecast} />
      {weather && <WeatherToday weather={weather}/>}
      {forecast && <WeatherForecast forecast={forecast}/>}
    </div>
  );
}

export default App;
