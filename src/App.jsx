import './App.css'
import {useEffect, useState} from "react";

function Card({ title } ) {
    const [count, setCount] = useState(0)
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]) //Array with values means that React will try to see if the value changes and then fire the useEffect

    useEffect(() => {
        console.log(`${title} card has been rendered`);
    }, []) //Empty array means that it runs only once when loading the component

    function likeAFilm() {
        setHasLiked((prevState) => !prevState);
        setCount(count + 1);
    }

    return (
        <div className="card">
            <h2>{title} <br/> {count || null}</h2>

            <button onClick={likeAFilm}>
                { hasLiked ? '❤️' : '🤍' }
            </button>
        </div>
    );
}

function App() {

    return(
        <div className="card-container">
            <Card title="Star Wars"/>
            <Card title="Lord of the Rings"/>
            <Card title="Wake Up The Dead Man"/>
        </div>
    );
}

export default App
