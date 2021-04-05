import { useEffect, useState } from 'react'
import { renderToString } from 'react-dom/server'

export type RasterizerOptions = {
    width: number
    height: number
    type?: string
    quality?: number
}

const drawImageCentered = (
    canvas: HTMLCanvasElement,
    image: HTMLImageElement,
) => {
    const imageRatio = image.width / image.height
    const canvasRatio = canvas.width / canvas.height
    const imageTallerThanCanvas = imageRatio < canvasRatio

    const [width, height] = imageTallerThanCanvas
        ? [canvas.height * imageRatio, canvas.height]
        : [canvas.width, canvas.width / imageRatio]

    const [x, y] = imageTallerThanCanvas
        ? [(canvas.width - width) / 2, 0]
        : [0, (canvas.height - height) / 2]

    const context = canvas.getContext('2d')
    context?.drawImage(image, x, y, width, height)
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

        image.onload = () => {
            const canvas = document.createElement('canvas')
            canvas.width = options.width
            canvas.height = options.height

            drawImageCentered(canvas, image)

            const data = canvas.toDataURL(options.type, options.quality)

            setRasterized(data)
        }
    }, [element, options])

    return rasterized
}
