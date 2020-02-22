import React from 'react'
import { IBasicComponent } from '../../react-app-env'

function Button(props: IBasicComponent) {
    return (
        <button
            className={`block w-full sm:w-auto sm:inline-block bg-${props.background}-500 hover:bg-${props.background}-400 font-semibold text-${props.color} px-4 py-2 rounded-lg xl:block xl:w-full`}
        >
            {props.content}
        </button>
    )
}

Button.defaultProps = {
    color: 'white',
    background: 'indigo',
} as IBasicComponent

export default Button
