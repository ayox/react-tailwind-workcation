import React from 'react'
import { IBasicComponent } from '../../react-app-env'
interface IProps extends IBasicComponent {
    name: string
}
function Checkbox(props: IProps) {
    return (
        <label className="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full">
            <input
                className={`form-checkbox bg-${props.background}-900 focus:bg-${props.background}-700`}
                type="checkbox"
                name={props.name}
            />
            <span className={`ml-2 text-${props.color}`}>{props.content}</span>
        </label>
    )
}

Checkbox.defaultProps = {
    background: 'gray',
    color: 'white',
} as IBasicComponent

export default Checkbox
