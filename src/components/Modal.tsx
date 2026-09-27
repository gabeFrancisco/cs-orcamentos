import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";

interface ModalProps {
    title: string,
    children: ReactElement
}

function Modal(props: ModalProps) {
    return (
        <div className="fixed flex flex-col justify-center items-center w-screen h-screen bg-zinc-300/80 z-40">
            <div className="rounded border text-zinc-800 border-zinc-300 w-1/2 shadow z-50 bg-white -mt-72 p-5">
                <div className="flex flex-row justify-between text-lg font-bold text-zinc-700">
                    <span>{props.title}</span>
                    <button type="button">
                        <FontAwesomeIcon className="text-white bg-red-500 text-sm cursor-pointer rounded p-1" icon={faClose} />
                    </button>
                </div>
                <hr className="text-zinc-300" />
            </div>
        </div>
    );
}

export default Modal;