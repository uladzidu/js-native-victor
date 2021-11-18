import React, {ChangeEvent, MouseEvent} from 'react';


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const onAgeChanged = (event : ChangeEvent<HTMLInputElement> ) => {
        console.log('age changed' + event.currentTarget.value)
    }

    const onNameChanged = () => {
        alert('Name has been changed')
    }

    return (
        <div>
            <textarea>Vlados</textarea>
            <button name = "deleted" onClick={deleteUser}>Delete</button>
            <input onChange={onAgeChanged} type="number"/>
        </div>

    )
}