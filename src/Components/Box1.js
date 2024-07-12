import React from 'react'
import Search from './Search'

export default function Box1(props) {
  const{temperature,text,date,time,icon,location}=props.data
  return (

<>
    <div className='container box-1'>
        <Search place={props.city}></Search>

      <div class='container icon-container'>
       <img class="icon" src={icon}></img>
      </div>

      <div className='container temp-container'>

        <h1 className='temp'>{Math.round(temperature)} <span>°C</span></h1>
        <p className='status'>{text}</p>
          <hr className='line'></hr>
        <p className='month'>{date}</p>
        <p className='day'>Thrusday, {time}</p>
        <p className='city'>{location}</p>
</div>





      
    </div>





  </>
  )
}
