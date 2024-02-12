import "./App.css"
import { WidgetTime } from "./components/WidgetTime/WidgetTime.jsx"
import { WidgetClimate } from "./components/WidgetClimate/WidgetClimate.jsx"

function App() {

  return (
    <div className="container">
      <WidgetTime position="top-left"></WidgetTime>
      <WidgetClimate position="medium-left"></WidgetClimate>
    </div>
  )
}

export default App
