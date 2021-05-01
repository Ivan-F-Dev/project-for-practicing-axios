import React, {useState} from "react";
import {Post} from "./post";
import {itKamasutra_API} from "../api/itKamasutra_api";

const ItKamasutra = () => {

    let [state, setState] = useState(0)


    let btn = async () => {
        let data = await itKamasutra_API.getMe()
        console.log(data)
        setState(data)
    }


    let logState = () => {
        console.log(state)
    }

    let login = async () => {
        let email = prompt("Введите Email", "place for your email address")
        let password = prompt("Введите пароль","place for your password")
        console.log(`Результаты ручного ввода email: ${email}, password: ${password}`)
        let data = await itKamasutra_API.login(email, password)
        console.log(data)
    }

    let logout = async () => {
        let data = await itKamasutra_API.logout()
        console.log(data)
    }

    //let mapPosts = state.map(e => <Post body={e.body} title={e.title} key={e.id} id={e.id}/>)

    return (
        <div>
            <div>Запросы на it-kamasutra</div>

            <button onClick={btn}>Отправить запрос</button>
            <button onClick={logState}>Залогировать стэйт</button>
            <button onClick={login}>Залогиниться</button>
            <button onClick={logout}>Вылогиниться</button>
            <div>Ответ сервера</div>
            <Post id={state === 0 ? 'state id empty' : state.data.id}/>
        </div>
    );
}

export default ItKamasutra;