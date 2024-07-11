import { convertToFahrenheit, getWeatherType } from "../weatherUtil";

const WeatherSummary=({currentWeather:{temperature,weatherCode},isCelcius})=>{
    return(
        <div>
            <h1>{isCelcius? `${temperature} °C `:`${convertToFahrenheit(temperature)} °F `} | {getWeatherType(weatherCode)}</h1>
        </div>
    );
}

export default WeatherSummary;