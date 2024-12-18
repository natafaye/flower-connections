import { CSSProperties } from "react"

type Props = {
    fill?: string
    stroke?: string
    strokeWidth?: number
    className?: string
    style?: CSSProperties
}

export default function Pentagon({ 
    fill = "#BBB", 
    stroke = "black", 
    strokeWidth = 0, 
    className = "",
    style = {}
}: Props) {
    return (
        <svg 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 590 560"
        className={className}
        style={style}
        >
            <polygon
                points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691"
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        </svg>
    )
}