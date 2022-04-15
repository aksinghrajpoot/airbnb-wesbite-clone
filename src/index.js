import ReactDOM from "react-dom/client"
import './App.css'
import Card from "./Components/Card"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

export default function App(){
    return <>
    <Navbar/>
    <Hero/>
    <Card/>
    </>
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)