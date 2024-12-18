import { useState } from "react"
import { Tile, TileBorder } from "../Tile"
import BoardClue from "./BoardClue"
import RotateButton from "./RotateButton"
import { ASPECT_RATIO, boardLocationsStyle, rotations, SIDES } from "../../shared"
import type { TileData } from "../../types"

type Props = {
    cluesEditable?: boolean
    tilesEditable?: boolean
    tiles: TileData[]
}

export default function Board({ cluesEditable = false, tilesEditable = false, tiles }: Props) {
    const [clues, setClues] = useState(["a", "b", "c", "d", "e"])
    const [topSide, setTopSide] = useState(0)
    const [rotation, setRotation] = useState(0)

    const rotate = (direction: 1 | -1) => {
        setTopSide((topSide + direction + SIDES) % SIDES)
        setRotation(rotation + (direction * -1 * 360 / SIDES))
    }

    return (
        <>
            <RotateButton direction={-1} onClick={rotate} className="absolute z-10 left-0" />
            <RotateButton direction={1} onClick={rotate} className="absolute z-10 right-0" />
            <div className="relative overflow-hidden max-h-full max-w-full h-auto mx-auto mt-0 transition-transform"
                style={{
                    aspectRatio: ASPECT_RATIO,
                    transform: `rotate(${rotation}deg`
                }}
            >
                {clues.map((clue, index) => (
                    <BoardClue
                        key={index}
                        clue={clue}
                        editable={cluesEditable && topSide === index}
                        rotation={rotations[index] - (180 / SIDES)}
                        onChange={(newValue) => setClues(clues.map((value, i) => i === index ? newValue : value))}
                    />
                ))}
                <TileBorder className="relative max-h-[90%] max-w-[90%] h-auto mx-auto my-[9.2%]"
                    pentagonRotation={180}
                >
                    {Array(SIDES).fill(null).map((_, index) => (
                        <TileBorder
                            key={index}
                            rotation={rotations[index]}
                            style={boardLocationsStyle[index]}
                            fill="#DDD"
                            strokeWidth={5}
                            stroke="#777"
                            className="w-1/3 absolute"
                        >
                            {tiles[index] && <Tile tile={tiles[index]} />}
                        </TileBorder>
                    ))}
                </TileBorder>
            </div>
        </>
    )
}