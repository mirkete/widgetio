import { WidgetCapsule } from "../WidgetCapsule/WidgetCapsule.jsx"
import { SunIcon } from "../../icons/SunIcon.jsx"
import { WindIcon } from "../../icons/WindIcon.jsx"
import { HumidityIcon } from "../../icons/HumidityIcon.jsx"
import { RainIcon } from "../../icons/RainIcon.jsx"
import { useEffect, useState } from "react"
import { API_URL } from "../../constants.js"
import "./WidgetClimate.css"

export function WidgetClimate({position}){
    
    const [climate, setClimate] = useState(null)

    useEffect(() => {
        fetch(`${API_URL}/api/climate`)
        .then((res) => res.json())
        .then((data) => {
            setClimate(data)
            window.localStorage.setItem("climate", JSON.stringify(data))
        })
    }, [])

    const currentClimate = climate?.currentClimate ?? null
    const hourlyClimate = climate?.hourlyClimate ?? null

    return (
        <>
        {!climate && <WidgetCapsule position={position}><p style={{height: "100%", padding: "16px"}}>Loading...</p></WidgetCapsule> }
        {climate &&  
            <WidgetCapsule position={position}>
            <div className="wgclimate-now">
                <SunIcon></SunIcon>
                <h1 className="medium-text">{currentClimate.temperature}°</h1>
            </div>
            <div className="wgclimate-details">
                <div className="wgclimate-detail">
                    <WindIcon></WindIcon>
                    <p className="small-text">Viento: {currentClimate.wind} km/h</p>
                </div>
                <div className="wgclimate-detail">
                    <RainIcon></RainIcon>
                    <p className="small-text">Prob. precip: {currentClimate.precipitation}%</p>
                </div>
                <div className="wgclimate-detail">
                    <HumidityIcon></HumidityIcon>
                    <p className="small-text">Humedad: 36%</p>
                </div>
            </div>
            <div className="wgclimate-nextdays"> 
                {
                hourlyClimate.map((climate) => {

                    const {temperature, date} = climate

                    return (
                        <div key={`climate${date}`} className="wgclimate-nextday">
                            <p className="small-text">{date}</p>
                            <SunIcon size="24"></SunIcon>
                            <p className="small-text">{temperature}°</p>
                        </div>
                    )
                })
                }
            </div>
        </WidgetCapsule>
        }
        </>
    )
}