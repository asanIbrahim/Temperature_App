import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
const App = () => {
    const [temperature, setTemperature] = useState(10)
    const [temperatureColor, setTemperatureColor] = useState("cold")
    const Summer = () => {
        if (temperature === 30) return
        const HotClimate = temperature + 1
        setTemperature(HotClimate)
        if (temperature >=15) {
            setTemperatureColor("hot")
        }
    }

    const winter = () => {
        if (temperature === 0) return
        const winterClimate = temperature - 1
        setTemperature(winterClimate)
        if (temperature < 15) {
            setTemperatureColor("cold")
        }
    }
    return (
        <div className='Container'>

            <div className='Temperature-container'>
                <div className={`Temperature-display ${temperatureColor}`}>{temperature}*C</div>
            </div>
            <div className='button-container'>
                <button onClick={() => Summer()}>+</button>
                <button onClick={() => winter()}> - </button>
            </div>
        </div>

    )


}

export default App