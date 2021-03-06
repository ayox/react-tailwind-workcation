/// <reference types="react-scripts" />
declare module 'tailwind.macro'

export interface IBasicComponent {
    color?: string
    background?: string
    content: string | number
    onClick: any
    onChange: any
    checked: boolean
}
