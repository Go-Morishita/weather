import React from 'react'

const WeatherList = ({ weatherData }) => {
    return (
        <div>
            <h2>{weatherData[0].publishingOffice}</h2>
            <ul>
            {weatherData[0].timeSeries[0].areas[0].weathers.map((weather, index) => (
                <li key={index}>{weather}</li>
            ))}
        </ul>
        </div>
    )
}

export default WeatherList