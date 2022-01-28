import React from 'react';

type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    he: string
    she: string
}

type PropsType2 = {
    imia: string
    vozrast: number
    on: string
    ona: string
}

export const ManComponent: React.FC<PropsType>  = ({title, man, ...rest}) => {

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
        </div>
    )
}

export const Component : React.FC<PropsType2> = ({imia,vozrast , ...rest}) => {
    return (
        <div>
            <h1>{imia}</h1>
            <hr/>
            <div>{vozrast}</div>
            <div>{rest.ona}</div>
        </div>
    )
}