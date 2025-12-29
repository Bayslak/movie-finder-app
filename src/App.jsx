import './App.css'

function Card({ title } ) {
    return (
        <div className="card">
            <h2>{title}</h2>
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
