import { useState } from "react"
import { SIDES } from "../../shared"

export const useBoardRotation = () => {
    const [topSide, setTopSide] = useState(0)
    const [rotation, setRotation] = useState(0)
  
    const rotate = (direction: 1 | -1) => {
      setTopSide((topSide + direction + SIDES) % SIDES)
      setRotation(rotation + (direction * -1 * 360 / SIDES))
    }

    return { topSide, rotation, rotate }
}

export type BoardRotation = ReturnType<typeof useBoardRotation>