import './WeatherForecast.css';
import { useEffect, useState } from 'react';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast({ forecast }) {
    const [forecastDays, setForecastDays] = useState([]);

    useEffect(() => {
        setForecastDays([]);
        const actualDay = new Date().getDate();
        let tempDay = actualDay;
        let tempDays = [];
        const tempForecastDays = [];

        if (forecast) {
            for (let i = 0; i < forecast.list.length; i += 1) {
                if (new Date(forecast.list[i].dt_txt).getDate() !== actualDay) {
                    if (tempDay !== new Date(forecast.list[i].dt_txt).getDate()) {
                        if (tempDays.length) tempForecastDays.push(tempDays)
                        tempDays = [];
                        tempDay = new Date(forecast.list[i].dt_txt).getDate();
                    }
                    tempDays.push(forecast.list[i]);
                }
            }
            setForecastDays(tempForecastDays);
        }
        console.log(tempForecastDays)
    }, [forecast])

    return (
        <div className='WeatherForecast'>
            <h1>Previsão para 4 dias</h1>
            {forecastDays.length > 0 &&
                forecastDays.map((day, index) => {
                    return (
                        <WeatherForecastDay key={index} day={day} />
                    );
                })}
        </div>
    )
}