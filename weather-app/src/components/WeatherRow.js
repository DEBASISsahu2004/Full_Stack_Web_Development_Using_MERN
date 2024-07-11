import { convertToFahrenheit } from "../weatherUtil";
import { getWeatherType } from "../weatherUtil";

const dateFormatter=new Intl.DateTimeFormat("en-IN",{
    month:"short",
    day:"numeric",
    year:"2-digit",
});

const formatDate=(date)=> dateFormatter.format(date);
const WeatherRow=({weather:{date,maxTemperature,minTemperature,weatherCode},isCelcius,})=>{
    return(
        <tr>
            <td>{formatDate(date)}</td>
            <td>H: {isCelcius?`${maxTemperature} °C`: `${convertToFahrenheit(maxTemperature)} °F`} - L: {isCelcius?`${minTemperature} °C`: `${convertToFahrenheit(minTemperature)} °F`}</td>
            <td>{getWeatherType(weatherCode)}</td>
        </tr>

    );
}

export default WeatherRow;