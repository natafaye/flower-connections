import { useState } from "react"
import { TileBorder } from "../Tile"
import Pentagon from "../Tile/Pentagon"
import { boardLocationsStyle, rotations, SIDES, } from "../../shared"



type Props = {}
export default function Board({ }: Props) {
    const [clues, setClues] = useState(["a", "b", "c", "d", "e"])

    return (
        <div
            className="relative overflow-hidden max-h-full max-w-full h-auto mx-auto mt-0"
            style={{ aspectRatio: 590 / 560 }}
        >
                {clues.map((clue, index) => (
                    <div
                        className="absolute w-[100%] text-center text-lg"
                        style={{
                            rotate: rotations[index] - 36 + "deg",
                            aspectRatio: 590 / 560
                        }}>
                        {clue}
                    </div>
                ))}
            <div className="relative max-h-[90%] max-w-[90%] h-auto mx-auto mt-[8%]" style={{ aspectRatio: 590 / 560 }}>
                <Pentagon style={{ rotate: "180deg" }} />
                {Array(SIDES).fill(null).map((_, index) => (
                    <TileBorder
                        rotation={rotations[index]}
                        style={boardLocationsStyle[index]}
                        fill="#DDD"
                        strokeWidth={5}
                        stroke="#777"
                        className="w-1/3 absolute"
                    >

                    </TileBorder>
                ))}
            </div>
        </div>
    )
}