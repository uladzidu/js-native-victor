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

export const ManComponent: React.FC<PropsType>  = ({title, man, ...rest}) => {

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
        </div>
    )
}