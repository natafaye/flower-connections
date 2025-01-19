import { useDraggable } from "@dnd-kit/core"
import { Tile } from "../Tile"
import type { TileData } from "../../types"
import classNames from "classnames"

type Props = {
    tile: TileData
}

export default function DraggableTile({ tile }: Props) {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: tile.words.join("|"),
        data: tile
    })
    return (
        <Tile
            tile={tile}
            className={classNames("z-30", isDragging && "opacity-0")}
            ref={setNodeRef}
            {...listeners}
            {...attributes} 
        />
    )
}