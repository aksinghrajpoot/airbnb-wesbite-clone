import ReactDOM from "react-dom/client"
import './App.css'
import Card from "./Components/Card"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


export default function App(){
    return <>
    <Navbar/>
    <Hero/>
    <Card/>
    <Footer/>
    </>
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)