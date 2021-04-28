import React, { useState } from 'react'
import { Rasterizer } from '../source'
import { Resizeable } from './Resizeable'
import { SVGComponent } from './SVGComponent'

export const Application: React.FC = () => {
    const [width, setWidth] = useState(100)
    const [height, setHeight] = useState(100)

    const inputs = (
        <>
            <p>
                Width:
                <input
                    type='number'
                    value={width}
                    onChange={(event) => setWidth(parseInt(event.target.value))}
                />
            </p>
            <p>
                Heigth:
                <input
                    type='number'
                    value={height}
                    onChange={(event) =>
                        setHeight(parseInt(event.target.value))
                    }
                />
            </p>
        </>
    )

    const component = <SVGComponent />

    return (
        <div style={{ width: '50%', margin: '8px auto' }}>
            <Resizeable>{component}</Resizeable>
            {inputs}
            <Rasterizer
                options={{ width, height }}
                style={{ display: 'block', width: '90%', margin: '0 auto' }}
            >
                {component}
            </Rasterizer>
        </div>
    )
}
