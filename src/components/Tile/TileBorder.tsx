import { HTMLAttributes, Ref } from "react"
import Pentagon from "./Pentagon"
import { ASPECT_RATIO } from "../../shared"

type Props = {
  rotation?: number
  fill?: string
  stroke?: string
  strokeWidth?: number
  shapeRotation?: number
  ref?: Ref<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>

export default function TileBorder({
  children,
  fill,
  stroke,
  strokeWidth,
  ref,
  style = {},
  rotation = 0,
  shapeRotation = 0,
  ...props
}: Props) {
  return (
    <div
      ref={ref}
      style={{
        transform: `rotate(${rotation}deg)`,
        aspectRatio: ASPECT_RATIO,
        ...style
      }}
      {...props}
    >
      <Pentagon
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className="absolute"
        style={{ transform: `rotate(${shapeRotation}deg)` }}
      />
      {children}
    </div>
  )
}