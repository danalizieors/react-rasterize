import React from 'react'
import { SVGComponent } from '../assets/SVGComponent'
import { Rasterizer } from '../source'

export const Application: React.FC = () => {
    const component = <SVGComponent />

    return (
        <>
            <Rasterizer options={{ width: 1000, height: 1000 }}>
                {component}
            </Rasterizer>
            {component}
        </>
    )
}
