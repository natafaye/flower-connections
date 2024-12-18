import { useState } from "react"
import { TileBorder } from "../Tile"
import Pentagon from "../Tile/Pentagon"
import { boardLocationsStyle, rotations, SIDES, } from "../../shared"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTurnDown, faTurnUp } from "@fortawesome/free-solid-svg-icons"



type Props = {
    cluesEditable?: boolean
    tilesEditable?: boolean
}
export default function Board({ cluesEditable = false, tilesEditable = false }: Props) {
    const [clues, setClues] = useState(["a", "b", "c", "d", "e"])
    const [topSide, setTopSide] = useState(0)
    const [rotation, setRotation] = useState(0)

    const rotate = (direction: 1 | -1) => {
        setTopSide((topSide + direction + SIDES) % SIDES)
        setRotation(rotation + (direction * -1 * 360 / SIDES))
    }

    return (
        <>
            <button className="absolute z-10 text-4xl hover:text-5xl p-10 pt-0"
                onClick={() => rotate(-1)}>
                <FontAwesomeIcon icon={faTurnUp} rotation={180} />
            </button>
            <button className="absolute z-10 text-4xl hover:text-5xl p-10 pt-0 right-0"
                onClick={() => rotate(1)}>
                <FontAwesomeIcon icon={faTurnDown} />
            </button>
            <div
                className="relative overflow-hidden max-h-full max-w-full h-auto mx-auto mt-0 transition-transform"
                style={{
                    aspectRatio: 590 / 560,
                    transform: `rotate(${rotation}deg`
                }}
            >

                {clues.map((clue, index) => (
                    <div
                        className="absolute w-[100%] text-center text-lg"
                        style={{
                            rotate: rotations[index] - 36 + "deg",
                            aspectRatio: 590 / 560,
                            zIndex: topSide === index ? 20 : 10
                        }}>
                        {cluesEditable && topSide === index ? (
                            <input
                                className="border-gray-300 p-1 px-2 w-1/2 border text-center"
                                type="text"
                                value={clue}
                                onChange={({target}) => setClues(clues.map((value, i) => i === index ? target.value : value))}
                            />
                        ) : clue}
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
        </>
    )
}