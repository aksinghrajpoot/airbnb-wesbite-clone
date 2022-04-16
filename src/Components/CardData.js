import MyData from "./MyData"
import Data from "./Card"


const MyElem = MyData.map(function(mapped){
    return <Data  key={mapped.id}  img={mapped.img} star={mapped.star} para={mapped.para} country={mapped.country} price={mapped.price} openSpots={mapped.openSpots}/>
})
export default function Card() {
    
    return <>
        <section>
            <div className="card--items">

                {MyElem}
            </div>
        </section>
    </>
}