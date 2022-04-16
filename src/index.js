import ReactDOM from "react-dom/client"
import './App.css'
import Card from "./Components/Card"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
//import React, { useEffect, useState } from "react";

// function Loading(){
//     return <>
//     <div className="loading-screen">Loading...<div className="loading"></div></div>
//     </>
// }

export default function App() {
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);
    return <>
        {/* {   loading ? 'Loading' : "Hello"} */}
                <>
                    <Navbar />
                    <Hero />
                    <Card />
                    <Footer />
                </>
        
    </>;
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)