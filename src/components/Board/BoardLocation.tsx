import { useDroppable } from "@dnd-kit/core"
import { boardLocationsStyle, rotations } from "../../shared"
import { TileData } from "../../types"
import { Tile, TileBorder } from "../Tile"
import DraggableTile from "../Make/DraggableTile"
import classNames from "classnames"

type Props = {
    side: number
    tile: TileData | null
    tilesEditable: boolean
}

export default function BoardLocation({ side, tile, tilesEditable }: Props) {
    const { isOver, setNodeRef } = useDroppable({
        id: "board-" + side
    })
    
    return (
        <TileBorder
            className={classNames("w-1/3 absolute p-1 flex justify-center items-center")}
            style={boardLocationsStyle[side]}
            rotation={rotations[side]}
            fill={isOver ? "#CCC" : "#DDD"}
            strokeWidth={isOver ? 6 : 5}
            stroke="#777"
            ref={setNodeRef}
        >
            {tile && (tilesEditable ?
                <DraggableTile tile={tile} /> :
                <Tile tile={tile} />
            )}
        </TileBorder>
    )
}