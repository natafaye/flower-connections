import { useState } from "react"
import type { TileData } from "../../types"
import Tile from "../Tile"
import { TEST_TILES } from "../../test-tiles"
import Board from "../Board/"

export default function Make() {
  const [tiles, setTiles] = useState<TileData[]>(TEST_TILES)

  return (
    <div className="flex flex-col gap-3 h-screen w-screen">
      <div className="flex p-[3%] gap-[3%]">
        {tiles.map(tile => (
          <Tile tile={tile}/>
        ))}
      </div>
      <div className="flex-grow flex-shrink overflow-hidden">
        <Board cluesEditable/>
      </div>
    </div>
  )
}