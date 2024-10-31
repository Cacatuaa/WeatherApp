import './WeatherToday.css'

export default function WeatherToday({weather}) {
    return (
        <div className='WeatherToday'>
            <table className='header'>
                <tr>
                    <td>
                        <h1>
                            {weather.name}
                            <br />
                            {weather.sys.country}
                        </h1>
                    </td>
                    <td>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Ícone representando o tempo atual' />
                    </td>
                </tr>
            </table>
            <table cellSpacing={2} cellPadding={0} className='content'>
                <tr>
                    <td className='tempAtual' rowSpan={6}>{weather.main.temp.toFixed(1)}°C</td>
                </tr>
                <tr>
                    <td className='align-left'>
                        Detalhes
                    </td>
                </tr>
                <tr>
                    <td className='align-left'>
                        Sensação
                    </td>
                    <td className='align-right'>
                        {weather.main.feels_like} °C
                    </td>
                </tr>
                <tr>
                    <td className='align-left'>
                        Vento
                    </td>
                    <td className='align-right'>
                        {weather.wind.speed} m/s
                    </td>
                </tr>
                <tr>
                    <td className='align-left'>
                        Humidade
                    </td>
                    <td className='align-right'>
                        {weather.main.humidity} %
                    </td>
                </tr>
                <tr>
                    <td className='align-left'>
                        Pressão
                    </td>
                    <td className='align-right'>
                        {weather.main.pressure} hPa
                    </td>
                </tr>
            </table>
        </div>
    )
}