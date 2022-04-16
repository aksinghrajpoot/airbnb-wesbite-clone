import ReactDOM from "react-dom/client"
import './App.css'
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Card from "./Components/CardData"


export default function App() {

    return <>
            <Navbar />
            <Hero />
            <Card />
            <Footer />

    </>;
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)