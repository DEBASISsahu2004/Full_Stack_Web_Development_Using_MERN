import {useEffect, useState} from "react";
import WeatherRow from "../components/WeatherRow";
import WeatherSummary from "../components/WeatherSummary";
import getWeather from "../api/weatherApi";

const fetchCoordinatoes=(callback)=>{
    navigator.geolocation.getCurrentPosition(
        ({coords:{latitude ,longitude}})=>{
            callback(latitude,longitude);
        },
        (err)=>{
            console.log(err);
        }
    );
}
const WeatherPage=()=>{
    const [todayWeather,setTodayWeather]=useState({});
    const [weekWeather,setWeekWeather]=useState([]);
    const [isCelcius,setIsCelcius]=useState(true);
    const isDay=todayWeather.isDay ?? true;

    useEffect(()=>{
        fetchCoordinatoes( async (latitude,longitude)=>{
           const weatherInfo=await getWeather({latitude,longitude});
           convertToStateVariable(weatherInfo);
        })
    })

    const convertToStateVariable = (tempWeekWeather)=>{
        let fetchedWeatherInfo=[];
        for(let i=0;i<tempWeekWeather.daily.time.length;i++){
            fetchedWeatherInfo.push({
                date:new Date(tempWeekWeather.daily.time[i]),
                maxTemperature:tempWeekWeather.daily.temperature_2m_max[i],
                minTemperature:tempWeekWeather.daily.temperature_2m_min[i],
                weatherCode:tempWeekWeather.daily.weathercode[i],
            })
        }
        setWeekWeather(fetchedWeatherInfo);

        let currentWeather= tempWeekWeather.current_weather;
        currentWeather.time=new Date(currentWeather.time);
        currentWeather.isDay=currentWeather.is_day===1?true:false;
        delete currentWeather.is_day;
        currentWeather.weatherCode=currentWeather.weathercode;
        delete currentWeather.weathercode;
        setTodayWeather(currentWeather)
    }

    return(
           <div className={isDay? "app" : "app dark"}>
            <h1 className="my-heading">Weather</h1>
            <button className="ui icon button" onClick={()=>{
                setIsCelcius(!isCelcius);
            }} style={{float:"right"}}>
                {isCelcius ? "°C" : "°F"}
                </button>

            <div><WeatherSummary currentWeather={todayWeather} isCelcius={isCelcius}/></div>
            <table className="ui very basic table" style={!isDay ? {backgroundColor: "black",color:"white"}:{}}>
                <thead className="table-custom">
                    <th>Date</th>
                    <th>Temperature</th>
                    <th>Type</th>

                </thead>
                <tbody className="table-custom">
                    {weekWeather.map((weather)=>(
                    <WeatherRow weather={weather} isCelcius={isCelcius} key={weather.date}/>
                    ))}
                </tbody>     
            </table>
           </div> 
     
    )
}

export default WeatherPage;