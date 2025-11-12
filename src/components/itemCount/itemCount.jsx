
import "./itemCount.css";
import { useState } from "react";

function itemCount({ stock }) {
    const [count, setCount] = useState(1);
    
    const less = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    
    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    return (
        <div className="count-container">
            <button className="count-button" onClick={less}>-</button>
            <span className="count-number">{count}</span>
            <button className="count-button" onClick={add}>+</button>
        </div>
    )
}

export default itemCount;