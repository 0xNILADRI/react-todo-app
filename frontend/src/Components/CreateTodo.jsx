import { useState } from "react"
import axios from 'axios'

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input id='title' type="text" placeholder="title" onChange={ function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />

        <input id='description' type="text" placeholder="description" onChange={ function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> < br />

        <button onClick={ async ()=> {
            axios.post(body)
        }}>Add a todo</button>

    </div>
}