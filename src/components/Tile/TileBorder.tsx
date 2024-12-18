import { CSSProperties, ReactNode } from "react"
import Pentagon from "./Pentagon"

type Props = {
  children?: ReactNode
  rotation?: number
  fill?: string
  strokeWidth?: number
  stroke?: string
  className?: string
  style?: CSSProperties
}

export default function TileBorder({ children, className, fill, strokeWidth, stroke, style = {}, rotation = 0 }: Props) {
  return (
    <div
      className={className}
      style={{
        rotate: rotation + "deg",
        aspectRatio: 590 / 560,
        ...style
      }}
    >
      <Pentagon fill={fill} strokeWidth={strokeWidth} stroke={stroke} />
      {children}
    </div>
  )
}