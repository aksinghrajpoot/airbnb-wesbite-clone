export default function Data(props){
    return (
        
            <div className="card">
                <img className="card--image" src={`../images/${props.img}`} alt="" />
                <div className="card--stats">
                    <img src="./star.png" alt="" className="card--star" />
                    <span>{props.star}.0</span>
                    <span className="gray">(10) • &nbsp; </span>
                    <span className="gray"> {props.country}</span>
                </div>
                <p>{props.para}</p>
                <p><span className="bold">From ${props.price} </span>/ person</p>
            </div>
    
    )
}