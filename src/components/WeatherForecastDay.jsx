import './WeatherForecastDay.css';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

export default function WeatherForecastDay({day}) {
    const [forecastDay, setForecastDay] = useState([]);
    const tempDay = new Date(day[0].dt_txt);
    const dayObj = {
        day: `${tempDay.getDate()}/${tempDay.getMonth() + 1}/${tempDay.getFullYear()}`,
        dayWeek: daysOfWeek[tempDay.getDay()]
    };

    useEffect(() => {
        const data = day.map(hour => ({
                hour: hour.dt_txt.split(" ")[1].substring(0, 5),
                min: (hour.main.temp_min - 5).toFixed(2),
                max: hour.main.temp_max
            }));
        setForecastDay(data);
    }, [day]);

    return (
        <div className='WeatherForecastDay'>
            <h1>{dayObj.dayWeek} - {dayObj.day}</h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
                    width={500}
                    height={300}
                    data={forecastDay}
                    margin={{
                        top: 5,
                        right: 40,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="max" stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="min" stroke="#8884d8" strokeWidth={3}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}