import { Dispatch, ReactNode, useState } from "react"
import { TileData } from "../../types"
import { DndContext, DragCancelEvent, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, UniqueIdentifier } from "@dnd-kit/core"
import { Tile } from "../Tile"
import { BANK, BOARD, moveTile, TileAction, TileLists } from "./useTileLists"
import { BoardRotation } from "./useBoardRotation"
import { rotations } from "../../shared"

type Props = {
    children?: ReactNode
    tiles: TileLists
    boardRotation: BoardRotation
    dispatch: Dispatch<TileAction>
}
export default function TileDraggingContext({ children, tiles, boardRotation, dispatch }: Props) {
    const [activeTile, setActiveTile] = useState<TileData | null>(null)
    const [activeRotation, setActiveRotation] = useState<number>(0)

    const handleDragStart = (event: DragStartEvent) => {
        setActiveTile(event.active.data.current as TileData)
    }

    const handleDragCancel = (event: DragCancelEvent) => {

    }

    const handleDragOver = (event: DragOverEvent) => {
        if (!event.over || !activeTile) return
        const [location, index] = getOverLocation(event.over.id)
        if (location === BOARD) {
            setActiveRotation(boardRotation.rotation + rotations[index])
        }
    }

    const handleDragEnd = (event: DragEndEvent) => {
        console.log(event)
        if (!event.over || !activeTile) {
        }
        else if (event.over.id === "bank") {
            dispatch(moveTile({
                tile: activeTile,
                newLocation: [BANK]
            }))
        }
        else if (typeof event.over.id === "string" && event.over.id.startsWith("board-")) {
            const newLocation = parseInt(event.over.id.split("-")[1])
            dispatch(moveTile({
                tile: activeTile,
                newLocation: [BOARD, newLocation]
            }))
        }
        setActiveTile(null)
    }

    return (
        <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
            {children}
            <DragOverlay>
                {activeTile &&
                    <Tile
                        tile={activeTile}
                        className="transition-transform"
                        style={{ transform: `rotate(${activeRotation}deg)` }}
                    />
                }
            </DragOverlay>
        </DndContext>
    )
}

const getOverLocation = (id: UniqueIdentifier) => {
    const boardLocation = parseInt(id.toString().split("-")[1])
    return isNaN(boardLocation) ? [BANK] : [BOARD, boardLocation]
}