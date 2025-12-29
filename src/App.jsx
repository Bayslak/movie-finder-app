import './App.css'
import {useState} from "react";

function Card({ title } ) {
    const [hasLiked, setHasLiked] = useState(false);

    return (
        <div className="card">
            <h2>{title}</h2>

            <button onClick={() => setHasLiked(!hasLiked)}>
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
