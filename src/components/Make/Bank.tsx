import React from "react"
import { TileData } from "../../types"
import { Tile } from "../Tile"
import DraggableTile from "./DraggableTile"
import { useDroppable } from "@dnd-kit/core"

type Props = {
    tiles: TileData[]
    tilesEditable: boolean
}

export default function Bank({ tiles, tilesEditable }: Props) {
    const { setNodeRef, isOver } = useDroppable({
        id: "bank"
    })
    
    return (
        <div className="flex p-[3%] gap-[3%]" ref={setNodeRef} >
            {tiles.map(tile => (
                <React.Fragment key={tile.words.join()}>
                    {tilesEditable ?
                        <DraggableTile tile={tile} /> :
                        <Tile tile={tile} />
                    }
                </React.Fragment>
            ))}
        </div>
    )
}