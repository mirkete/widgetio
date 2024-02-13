import "./App.css"
import { WidgetTime } from "./components/WidgetTime/WidgetTime.jsx"
import { WidgetClimate } from "./components/WidgetClimate/WidgetClimate.jsx"
import { WidgetTodos } from "./components/WidgetTodos/WidgetTodos.jsx"

function App() {

  return (
    <div className="container">
      <WidgetTime position="top-left"></WidgetTime>
      <WidgetClimate position="medium-left"></WidgetClimate>
      <WidgetTodos position="top-midleft"></WidgetTodos>
    </div>
  )
}

export default App
