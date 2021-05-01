import './App.css';
import React from "react";
import ItKamasutra from "./components/ItKamasutra";
import JsonPlaceholder from "./components/JsonPlaceholder";


const App = () => {

    return (
        <div className="App">
            <ItKamasutra/>
            <JsonPlaceholder/>
        </div>
    );
}

export default App;


/*
function get() {
    let data
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => data = response.data)
        .then(data => console.log(data.title))
}*/
