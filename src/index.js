import ReactDOM from "react-dom/client"
import './App.css'
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Card from "./Components/CardData"
import React, {useState,useEffect} from 'react';



export default function App() {
    const [isLoading, setLoading] = useState(true);

    function fakeRequest() {
      return new Promise(resolve => setTimeout(() => resolve(), 2500));
    }
  
    useEffect(() => {
      fakeRequest().then(() => {
        const el = document.querySelector(".loader-container");
        if (el) {
          el.remove();
          setLoading(!isLoading);
        }
      });
    }, []);
  
    if (isLoading) {
      return null;
    }
    return <>
        <Navbar />
        <Hero />
        <Card />
        <Footer />

    </>;
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)