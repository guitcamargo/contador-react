import { useState } from "react";

export default function App() {

    const [number, setNumber] = useState(0)

    function add(){
        setNumber(number + 1);
    }
    
    function reduce() {
        setNumber(number - 1);
    }

    function reset() {
        setNumber(0);
    }

    return <section>
        <h1>Contador</h1>
        <p>{number}</p>
        <button onClick={add}> + </button>
        <button onClick={reduce}> - </button>
        <button onClick={reset}> Limpar </button>
    </section>
}