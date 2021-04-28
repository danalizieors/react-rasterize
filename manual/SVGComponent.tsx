import React from 'react'

export const SVGComponent: React.FC = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
        <svg viewBox='-100 -100 200 200' preserveAspectRatio='xMidYMid slice'>
            <rect
                x={-100}
                y={-100}
                width='100%'
                height='100%'
                fill='pink'
            ></rect>
            <circle r={50} fill='red' opacity={0.5}></circle>
        </svg>
        <svg viewBox='-100 -100 200 200' preserveAspectRatio='xMidYMid meet'>
            <circle r={50} fill='green' opacity={0.5}></circle>
        </svg>
    </svg>
)
