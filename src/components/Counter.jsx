import React, {useState} from 'react';
//rsc + tab
const Counter = function () {
    const [count, setCount] = useState(0); //re-rendering upon changing state

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;