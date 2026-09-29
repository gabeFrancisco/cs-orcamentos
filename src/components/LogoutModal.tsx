import { useNavigate } from "react-router";
import { supabase } from "../lib/supabase";
import Modal from "./Modal";

interface LogoutModalProps {
    open: boolean;
    onClose: () => void
}

function LogoutModal(props: LogoutModalProps) {
    const navigate = useNavigate();
    function handleLogout() {
        supabase.auth.signOut().then(() => {
            navigate("/login")
        })
    }
    return (
        <Modal open={props.open} title="Sair" onClose={props.onClose}>
            <p>Você tem certeza que deseja sair?</p>
            <div className="w-full flex flex-row gap-3 mt-3">
                <button type="button" onClick={props.onClose} className="btn w-full">Cancelar</button>
                <button type="button" onClick={handleLogout} className="btn btn-red w-full">Sair</button>
            </div>
        </Modal>
    );
}

export default LogoutModal;