import type { TileData } from "../../types"
import { rotations } from "../../shared"
import TileBorder from "./TileBorder"
import { HTMLAttributes, Ref } from "react"
import classNames from "classnames"

type Props = {
    tile: TileData
    ref?: Ref<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>

export default function Tile({
    tile: { words, rotation },
    className,
    ref,
    ...props
}: Props) {
    return (
        <TileBorder
            rotation={rotation}
            className={classNames("relative flex flex-grow", className)}
            ref={ref}
            onClick={() => {}}
            {...props}
        >
            {words.map((word, index) => (
                <div
                    key={word}
                    className="absolute h-[85%] mt-[12%] w-full text-center"
                    style={{ transform: `rotate(${rotations[index]}deg)` }}>
                    {word}
                </div>
            ))}
        </TileBorder>
    )
}