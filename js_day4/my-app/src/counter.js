import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count +1);
    };

    const decrease = () => {
        setCount(count -1);
    };

    return(
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>+1</button>
        </div>
    );
}

export default Counter;