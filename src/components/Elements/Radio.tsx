import React from 'react'
import { IBasicComponent } from '../../react-app-env'

interface IProps extends IBasicComponent {
    name: string
    value: string
}

function Radio(props: IProps) {
    return (
        <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
            <input
                checked={props.checked}
                className={`form-radio bg-${props.background}-900 focus:bg-${props.background}-700`}
                type="radio"
                onChange={props.onChange}
                value={props.value}
                name={props.name}
            />
            <span className={`ml-2 text-${props.color}`}>{props.content}</span>
        </label>
    )
}

Radio.defaultProps = {
    background: 'gray',
    color: 'white',
} as IBasicComponent

export default Radio
