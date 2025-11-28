
import "./itemCount.css";

function itemCount({ count, less, add }) {
   
    
    return (
        <div className="count-container">
            <button className="count-button" onClick={less}>-</button>
            <span className="count-number">{count}</span>
            <button className="count-button" onClick={add}>+</button>
        </div>
    )
}

export default itemCount;