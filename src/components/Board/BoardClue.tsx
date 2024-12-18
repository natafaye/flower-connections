import { ASPECT_RATIO } from "../../shared"

type Props = {
    clue: string
    editable: boolean
    rotation: number
    onChange: (newValue: string) => void
}

export default function BoardClue({ clue, editable, rotation, onChange }: Props) {
    return (
        <div
            className="absolute left-[2.5%] right-[2.5%] top-[2.5%] text-center text-lg"
            style={{
                rotate: rotation + "deg",
                aspectRatio: ASPECT_RATIO,
                zIndex: editable ? 20 : 10
            }}>
            {editable ? (
                <input
                    className="p-1 px-2 w-[40%] border text-center"
                    type="text"
                    value={clue}
                    onChange={(event) => onChange(event.target.value)}
                />
            ) : clue}
        </div>
    )
}