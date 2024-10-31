import React, { useState } from "react";
import "./SearchBar.css";

export default function SeachBar({setWeather, setForecast}) {
    const [inputText, setInputText] = useState("");

    async function searchCity() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=ee518b8bc88b3136e114330778f54770&units=metric`);
        if (response.ok) {
            const weather = await response.json();
            console.log(weather)
            setWeather(weather);
            // alert(`Cidade: ${data.name}\nTemperatura atual: ${data.main.temp}°C\nMínima: ${data.main.temp_min}°C\nMáxima: ${data.main.temp_max}°C`);
        } else {
            console.log('not ok');
        }
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputText}&units=metric&appid=ee518b8bc88b3136e114330778f54770`);
        if (res.ok) {
            const forecast = await res.json();
            console.log(forecast)
            setForecast(forecast);
        }
        setInputText("");
    }

    return (
        <div className="search-bar">
            <h1>Previsão do Tempo</h1>
            <input type="text" placeholder="Digite o nome da cidade..." onChange={(e) => setInputText(e.target.value)} value={inputText} />
            <button onClick={searchCity}>Pesquisar</button>
        </div>
    );
} 