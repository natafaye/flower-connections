import { useReducer } from "react"
import { TEST_TILES } from "../../test-tiles"
import { TileData } from "../../types"

// State

export const BANK = 0
export const BOARD = 1

const initialValue = {
    [BANK]: TEST_TILES.slice(1),
    [BOARD]: [TEST_TILES[0], null, null, null, null]
}

export type TileLists = typeof initialValue

// Actions

type MovePayload = { tile: TileData, newLocation: [typeof BANK] | [typeof BOARD, number]}
export type TileAction = { type: "move", payload: MovePayload }

export const moveTile = (payload: MovePayload): TileAction => ({ type: "move", payload })

// Reducer

const reducer = (state: TileLists, action: TileAction) => {
    switch(action.type) {
        case "move":
            console.log(action)
            const { tile, newLocation: [newLocation, newIndex] } = action.payload
            const nextState = { ...state }

            // check if there's a tile that will be bumped in the new location
            const bumpedTile = newLocation === BOARD && state[newLocation][newIndex]
            // if there is, and it's not the same tile we're moving, add it to the bank
            if(bumpedTile && bumpedTile !== tile)
                nextState[BANK] = [...nextState[BANK], bumpedTile]
            
            // get the current location of the tile that's moving
            const currentLocation = state[BOARD].includes(tile) ? BOARD : BANK
            const currentIndex = state[currentLocation].indexOf(tile)
            // remove the tile from that location
            if(currentLocation === BANK) {
                nextState[BANK] = nextState[BANK].filter(t => t !== tile)
            } else {
                nextState[BOARD][currentIndex] = null
            }

            // add the tile to the new location
            if(newLocation === BANK) {
                nextState[BANK] = [...nextState[BANK], tile]
            } else {
                nextState[BOARD][newIndex] = tile
            }

            return nextState
        default:
            return state
    }
}

// Hook

export const useTileLists = () => {
    return useReducer(reducer, initialValue)
}