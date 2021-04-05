import React from 'react'
import { RasterizerOptions, useRasterizer } from '../hooks/useRasterizer'

export type RasterizerProps = {
    options: RasterizerOptions
} & React.ImgHTMLAttributes<HTMLImageElement>

export const Rasterizer: React.FC<RasterizerProps> = ({
    options,
    children,
    ...props
}) => {
    const child = React.Children.only(children) as JSX.Element
    const data = useRasterizer(child, options)

    return <img src={data} {...props} />
}
