import { useState } from "react"
import Board from "../Board/"
import { Tile } from "../Tile"
import type { TileData } from "../../types"
import { TEST_TILES } from "../../test-tiles"

export default function Make() {
  const [unusedTiles, setUnusedTiles] = useState<TileData[]>(TEST_TILES)
  const [boardTiles, setBoardTiles] = useState<TileData[]>([])

  return (
    <div className="flex flex-col gap-3 h-screen w-screen">
      <div className="flex p-[3%] gap-[3%]">
        {unusedTiles.map(tile => (
          <Tile key={tile.words.join()} tile={tile}/>
        ))}
      </div>
      <div className="flex-grow flex-shrink overflow-hidden">
        <Board cluesEditable tiles={boardTiles}/>
      </div>
    </div>
  )
}