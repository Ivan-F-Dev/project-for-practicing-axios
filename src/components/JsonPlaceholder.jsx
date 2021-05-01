import React, {useState} from "react";
import {jsonPL_API} from "../api/jsonPlaceholder_api";
import {Post} from "./post";




const JsonPlaceholder = () => {

    let [state, setState] = useState([])


    let btn = async () => {
        let data = await jsonPL_API.getPosts(5)
        console.log(data)
        setState(data)
    }


    let logState = () => {
        console.log(state)
    }

    let mapPosts = state.map(e => <Post body={e.body} title={e.title} key={e.id} id={e.id}/>)

    return (
        <div>
            <div>Запросы на jsonPlaceholder</div>
            <button onClick={btn}>Отправить запрос</button>
            <button onClick={logState}>Залогировать стэйт</button>
            <div>Посты</div>
            {mapPosts}
        </div>
    );
}

export default JsonPlaceholder;