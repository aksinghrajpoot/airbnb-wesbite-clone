import Data from "./CardData"


export default function Card() {
    return <>
        <section>
            <div className="card--items">

                <Data
                    img='katle.png'
                    star={6}
                    para='Life lesson from Karle Jefros'
                    country='India'
                    price={135}
                />
                <Data
                    img='wedding.png'
                    star={8}
                    para='Stylish wedding ceremony in USA'
                    country='USA'
                    price={212}
                />
                <Data
                    img='mountain.png'
                    star={10}
                    para='Cycling helps us being physically fit'
                    country='Germany'
                    price={203}
                />
                <Data
                    img='swimming.png'
                    star={9}
                    para='Swimming contest held in Germany'
                    country='Germany'
                    price={176}
                />
                <Data
                    img='yoga.png'
                    star={4}
                    para='Learn yoga lessons from indian trainers'
                    country='Romania'
                    price={154}
                />
            </div>
        </section>
    </>
}