import { type SVGProps } from "react"

type ScaleableSVG = { scale?: number, fill?: string }

export function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & ScaleableSVG) {
    const { scale } = props
    const xScale = scale ? 24 * scale : 24
    const yScale = scale ? 24 * scale : 24
    return (
        <svg
            {...props}
            width={xScale}
            height={yScale}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>

    )
}