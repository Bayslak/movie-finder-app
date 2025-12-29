import './App.css'

function Card({ title } ) {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
}

function App() {
    return(
        <div>
            <h2>Function component</h2>

            <Card title="Star Wars"/>
            <Card title="Lord of the Rings"/>
            <Card title="Wake Up The Dead Man"/>
        </div>
    );
}

export default App
