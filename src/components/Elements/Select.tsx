import React from 'react'
import { IBasicComponent } from '../../react-app-env'
import Checkbox from './Checkbox'

interface IProps extends IBasicComponent {
    name: string
    value: string
    options: Array<string>
}

function Select(props: IProps) {
    return (
        <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
            <span className="text-sm font-semibold text-gray-500">
                {props.content}
            </span>
            <select
                className={`mt-1 form-select bg-${props.background}-900 block w-full text-${props.color} shadow focus:bg-${props.background}-600`}
            >
                {props.options.map(o => (
                    <option>{o}</option>
                ))}
            </select>
        </label>
    )
}
Checkbox.defaultProps = {
    background: 'gray',
    color: 'white',
} as IBasicComponent

export default Select
