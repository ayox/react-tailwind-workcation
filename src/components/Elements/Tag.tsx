import React from 'react'

function Tag(props: { text: string; color: string; background: string }) {
    return (
        <span
            className={`inline-block px-2 py-1 leading-none bg-${props.background}-200 text-${props.color}-800 rounded-full font-semibold uppercase tracking-wide text-xs`}
        >
            {props.text}
        </span>
    )
}

export default Tag
