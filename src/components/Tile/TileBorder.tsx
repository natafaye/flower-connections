import { CSSProperties, ReactNode } from "react"
import Pentagon from "./Pentagon"
import { ASPECT_RATIO } from "../../shared"

type Props = {
  children?: ReactNode
  rotation?: number
  fill?: string
  strokeWidth?: number
  stroke?: string
  className?: string
  style?: CSSProperties
  pentagonRotation?: number
}

export default function TileBorder({
  children,
  className,
  fill,
  strokeWidth,
  stroke,
  style = {},
  rotation = 0,
  pentagonRotation = 0
}: Props) {
  return (
    <div
      className={className}
      style={{
        rotate: rotation + "deg",
        aspectRatio: ASPECT_RATIO,
        ...style
      }}
    >
      <Pentagon
        fill={fill}
        strokeWidth={strokeWidth}
        stroke={stroke}
        style={{ rotate: pentagonRotation + "deg" }}
      />
      {children}
    </div>
  )
}