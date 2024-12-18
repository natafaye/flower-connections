import type { TileData } from "../../types"
import { rotations } from "../../shared"
import TileBorder from "./TileBorder"

type Props = {
    tile: TileData
}

export default function Tile({ tile: { words, rotation } }: Props) {
    return (
        <TileBorder rotation={rotation} className="relative flex flex-grow">
            {words.map((word, index) => (
                <div
                    className="absolute h-[85%] mt-[12%] w-full text-center"
                    style={{ rotate: rotations[index] + "deg" }}>
                    {word}
                </div>
            ))}
        </TileBorder>
    )
}