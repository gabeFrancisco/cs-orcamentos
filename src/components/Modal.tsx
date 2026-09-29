import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
    title: string,
    open: boolean
    children: React.ReactNode,
    onClose: () => void
}

function Modal(props: ModalProps) {
    return (
        <div className={`fixed flex flex-col justify-center items-center w-screen h-screen transition-opacity duration-200  bg-zinc-300/80 z-40
            ${props.open ? "visible" : "hidden"}`}>
            <div className={`rounded border text-zinc-800 border-zinc-300 shadow z-50 w-1/3 bg-white -mt-20 p-5
                ${props.open
                    ? "scale-100 translate-y-0"
                    : "scale-95 translate-y-2"
                }`}>
                <div className="flex flex-row justify-between text-lg font-bold text-zinc-700">
                    <span>{props.title}</span>
                    <button type="button" onClick={props.onClose}>
                        <FontAwesomeIcon className="text-white bg-red-500 text-sm hover:bg-red-700 cursor-pointer rounded p-1" icon={faClose} />
                    </button>
                </div>
                <hr className="text-zinc-300" />
                <div className="py-3">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Modal;