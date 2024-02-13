import "./WidgetTodos.css"
import { WidgetCapsule } from "../WidgetCapsule/WidgetCapsule.jsx"
import { useState } from "react"
import { useLocalStorage } from "../../hooks/useLocalStorage.js"

export function WidgetTodos({position}){

    const [newTaskText, setNewTaskText] = useState("")
    const [tasks, setTasks] = useLocalStorage("tasks", [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(newTaskText.replaceAll(" ", "") !== ""){
            const newTask = {content: newTaskText, id: crypto.randomUUID()}
            const newTasksList = [...tasks, newTask]
            setTasks(newTasksList)
            setNewTaskText("")
        }
    }

    const deleteTask = (id) => {
        return () => {
            const taskIndex = tasks.findIndex((el) => el.id === id) 
            const currentTasks = [...tasks]
            currentTasks.splice(taskIndex, 1)
            setTasks(currentTasks)
        }
    }

    return(
        <WidgetCapsule style={{alignItems: "flex-start", gap: "24px"}} position={position}>
            <h1 style={{alignSelf:"center"}}>Tasks</h1>
            <div className="wgtasks-container">
            {
                tasks.map((task, i) => {
                    return (
                        <div key={"task"+i} className="wgtasks-task">
                            <p onClick={deleteTask(task.id)} style={{cursor:"pointer"}}>❌</p>
                            <p> {task.content} </p>
                        </div>
                    )
                })
            }
            </div>
            <form onSubmit={handleSubmit} action="" className="wgtasks-newtask">
                <input value={newTaskText} onChange={(e) => {setNewTaskText(e.target.value)}} type="text" className="wgtasks-input"/>
                <button type="submit">⬆️</button>
            </form>
        </WidgetCapsule>
    )
}