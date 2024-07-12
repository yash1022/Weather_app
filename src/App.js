import logo from './logo.svg';
import './App.css';
import Box1 from './Components/Box1';
import Box2 from './Components/Box2';
import { useEffect, useState } from 'react';

function App() {

 const [city, newcity]=useState("barcelona")

  const [temp,newtemp]=useState({
    temprature:null,
    text:null,
    date:null,
    time:null,
    icon:null,
    location:null
  
  })

  const [stats,newstats]=useState({

    wind:null,
    direction:null,
    humidity:null,
    feels:null,
    UV:null,
    pressure:null,
    precip:null,
    visibility:null,
    dewpoint:null,
    co2:null,
    no2:null,
    o3:null
})

  useEffect(() => {
   async function call()
    {
      const URL=`http://api.weatherapi.com/v1/current.json?key=232023f1860b47259fa172725240607&q=${city}&aqi=yes`
      const data = await fetch(URL);
      const weatherData = await data.json();
      const localtime= weatherData.location.localtime
      const date_part=localtime.split(" ")[0]
      const time_part=localtime.split(" ")[1]
      newtemp({temperature:weatherData.current.temp_c,
        text:weatherData.current.condition.text,
        date:date_part,
        time:time_part,
        city:weatherData.location.name,
        icon:weatherData.current.condition.icon,
        location:weatherData.location.name
      })

      newstats({
         wind:weatherData.current.wind_kph,
         direction:weatherData.current.wind_dir,
         humidity:weatherData.current.humidity,
         feels:weatherData.current.feelslike_c,
         UV:weatherData.current.uv,
         pressure:weatherData.current.pressure_mb,
         precip:weatherData.current.precip_mm,
         visibility:weatherData.current.vis_km,
         dewpoint:weatherData.current.dewpoint_c,
         co2:weatherData.current.air_quality.co,
         no2:weatherData.current.air_quality.no2,
         o3:weatherData.current.air_quality.o3
})

    }

    call();

  },[city])




  return (
    <div className='container app-container'>
  
    <Box1 data={temp} city={newcity}></Box1>
    <Box2 data={stats}></Box2>

    </div>
  )
}

export default App;
