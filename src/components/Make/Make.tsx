import TileDraggingContext from "./TileDraggingContext"
import Board from "../Board"
import Bank from "./Bank"
import { BANK, BOARD, useTileLists } from "./useTileLists"
import { useBoardRotation } from "./useBoardRotation"

export default function Make() {
  const [tiles, dispatch] = useTileLists()
  const boardRotation = useBoardRotation()

  const tilesEditable = true
  const cluesEditable = false

  return (
    <div className="flex flex-col gap-3 h-screen w-screen overflow-hidden">
      <TileDraggingContext
        tiles={tiles}
        boardRotation={boardRotation}
        dispatch={dispatch}
      >
        <Bank tiles={tiles[BANK]} tilesEditable={tilesEditable} />
        <div className="flex-grow flex-shrink overflow-hidden">
          <Board
            cluesEditable={cluesEditable}
            tilesEditable={tilesEditable}
            tiles={tiles[BOARD]}
            boardRotation={boardRotation}
          />
        </div>
      </TileDraggingContext>
    </div>
  )
}