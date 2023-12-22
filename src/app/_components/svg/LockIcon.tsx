import { type SVGProps } from "react"

type ScaleableSVG = { scale?: number, fill?: string }

export function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & ScaleableSVG) {
    const { scale } = props
    const xScale = scale ? 24 * scale : 24
    const yScale = scale ? 24 * scale : 24
    return (
        <svg
            {...props}
            width={xScale}
            height={yScale}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

    )
}