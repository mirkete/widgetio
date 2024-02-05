import "./WidgetTime.css"
import { useState } from "react"
import { useEffect } from "react"
import { WidgetCapsule } from "../WidgetCapsule/WidgetCapsule"
import { DIAS_SEMANA, MESES } from "../../constants"

export function WidgetTime(){

    const [date, setDate] = useState(() => new Date(Date.now()))

    useEffect(() => {

        let intervalId = window.setInterval(() => {
            const newHour = new Date(Date.now())
            setDate(newHour)
        }, 1000*60)

        return () => {
            window.clearInterval(intervalId)
        }
    }, [])

    const year = date.getFullYear()
    const month = MESES[date.getMonth()]
    const day = DIAS_SEMANA[date.getDay()]
    const dateNumber = date.getDate()
    const hour = ("0" + date.getHours()).slice(-2)
    const minutes = ("0" + date.getMinutes()).slice(-2)

    return(
        <WidgetCapsule>
            <div className="wgtime-div">
                <p>{day}, {dateNumber} de {month} de {year}</p>
                <h1 className="big-text">{hour}:{minutes}</h1>
            </div>
        </WidgetCapsule>
    )
}