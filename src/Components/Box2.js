import React from 'react'

export default function Box2(props) {
    const {wind, direction,humidity,feels,UV,pressure,precip,visibility,dewpoint, co2,no2,o3}=props.data
  return (
    <div className='container box-2'>
      <div className='container inner inner-box-1'>
      <button type="button" className="btn btn-light">Today</button>
      <button type="button" className="btn btn-light">Tomorrow</button>
      </div>
      <div className=' container  inner inner-box-2'>

      <div className="row">
            <div className="col-md-4">
                <div className="box">
                    <p className='upper-text'>Wind</p>
                    <p className='lower-text'>{wind} Km/h</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                <p className='upper-text'>Humidity</p>
                <p className='lower-text'>{humidity}%</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                <p className='upper-text'>Real Feel</p>
                <p className='lower-text'>{feels}</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="box">
                <p className='upper-text'>UV Index</p>
                <p className='lower-text'>{UV}</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                <p className='upper-text'>Pressure</p>
                <p className='lower-text'>{pressure} mb</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                <p className='upper-text'>Rain</p>
                <p className='lower-text'>{precip} in</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="box">
                <p className='upper-text'>Visibility</p>
                <p className='lower-text'>{visibility}Km</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                <p className='upper-text'>Dewpoint</p>
                <p className='lower-text'>{dewpoint}</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                <p className='upper-text'>Air Quality</p>
                <p className='lower-text aq'>
                <ul>
                  <li>CO₂ : {co2}</li>
                  <li>No2 : {no2}</li>
                  <li>O₃ : {o3}</li>
                </ul>
              </p>
                </div>
            </div>
        </div>
        



      </div>
      
    </div>
  )
}
