import React, {useState} from 'react'
import firebase from 'firebase/app'

function Form() {
    const [title, setTitle] = useState('')

    const handleOnChange = (e) =>{
        setTitle(e.target.value)
    }

    const createCard = () => {

    }

    return (
        <div>
            <input type="text" onChange={handleOnChange}></input>
            <button onClick = {createCard}>Commit</button>
        </div>
    )
}

export default Form
