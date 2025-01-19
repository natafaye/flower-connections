import { useState } from "react"
import { TileBorder } from "../Tile"
import BoardClue from "./BoardClue"
import RotateButton from "./RotateButton"
import { ASPECT_RATIO, rotations, SIDES } from "../../shared"
import type { TileData } from "../../types"
import BoardLocation from "./BoardLocation"
import classNames from "classnames"
import { BoardRotation } from "../Make/useBoardRotation"

type Props = {
    tiles: Array<TileData | null>
    boardRotation: BoardRotation
    cluesEditable?: boolean
    tilesEditable?: boolean
}

export default function Board({ tiles, boardRotation, cluesEditable = false, tilesEditable = false }: Props) {
    const [clues, setClues] = useState(["a", "b", "c", "d", "e"])
    const { rotation, topSide, rotate } = boardRotation

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
                <TileBorder
                    className={classNames(
                        "relative max-h-[90%] max-w-[90%] h-auto mx-auto my-[9.2%]",
                        tilesEditable && "z-30"
                    )}
                    shapeRotation={180}
                >
                    {Array(SIDES).fill(null).map((_, index) => (
                        <BoardLocation
                            key={index}
                            side={index}
                            tile={tiles[index]}
                            tilesEditable={tilesEditable}
                        />
                    ))}
                </TileBorder>
            </div>
        </>
    )
}