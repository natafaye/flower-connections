import { faTurnDown, faTurnUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import { HTMLAttributes } from "react"

type Props = {
    /**
     * 1 for clockwise, -1 for counter-clockwise
     */
    direction: 1 | -1
    onClick: (direction: 1 | -1) => void
} & Omit<HTMLAttributes<HTMLButtonElement>, "onClick">

export default function RotateButton({ direction, onClick, className, ...props }: Props) {
    return (
        <button
            onClick={() => onClick(direction)}
            className={classNames("text-4xl hover:text-5xl p-10 pt-5", className)}
            {...props}
        >
            <FontAwesomeIcon
                icon={direction === 1 ? faTurnDown : faTurnUp}
                rotation={direction === 1 ? undefined : 180}
            />
        </button>
    )
}