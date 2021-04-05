import { useEffect, useState } from 'react'
import { renderToString } from 'react-dom/server'

export type RasterizerOptions = {
    width: number
    height: number
    type?: string
    quality?: number
}

export const useRasterizer = (
    element: JSX.Element,
    options: RasterizerOptions,
) => {
    const [rasterized, setRasterized] = useState<string>(null!)

    useEffect(() => {
        const rendered = renderToString(element)

        const image = document.createElement('img')
        image.src = `data:image/svg+xml;base64,${btoa(rendered)}`

        var canvas = document.createElement('canvas')
        canvas.width = options.width
        canvas.height = options.height

        const context = canvas.getContext('2d')
        context?.drawImage(image, 0, 0)
        const data = canvas.toDataURL(options.type, options.quality)

        setRasterized(data)
    }, [element, options])

    return rasterized
}
