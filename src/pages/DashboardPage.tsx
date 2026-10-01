import { useRef, useState } from "react";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import { useReactToPrint } from 'react-to-print'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faListSquares } from "@fortawesome/free-solid-svg-icons";
import html2canvas from 'html2canvas-pro'
import jsPDF from 'jspdf'

function DashboardPage() {
    //variaveis de impressão
    const contentRef = useRef<HTMLDivElement>(null);
    const reacToPrintFn = useReactToPrint({ contentRef })
    const reactToPrintFnDownload = useReactToPrint(
        {
            contentRef,
            print: async (iframe) => {
                const doc = iframe.contentDocument;

                if (!doc) {
                    throw new Error("Não foi possível acessar o iframe!")
                }

                const el = doc.querySelector<HTMLElement>(".page");
                if (!el) {
                    throw new Error("Orçamento não encontrado!");
                }

                const canvas = await html2canvas(el, {
                    scale: 3,
                    useCORS: true,
                    backgroundColor: "#ffffff"
                })

                const img = canvas.toDataURL("image/png");
                const pdf = new jsPDF({
                    orientation: "portrait",
                    unit: "mm",
                    format: "a4"
                })

                const widthPDF = 210;
                // const heightPDF = 297;

                const proporcao = canvas.height / canvas.width;

                const heightImage = widthPDF * proporcao;

                pdf.addImage(
                    img,
                    "PNG",
                    0,
                    0,
                    widthPDF,
                    heightImage
                );

                pdf.save(`csorcamentos_${new Date().toISOString()}.pdf`);
            }
        }
    )

    const [showPage, setShowPage] = useState(false);

    return (<div className="flex flex-col lg:flex-row bg-zinc-200 w-dvw h-dvh">
        <div className="lg:hidden top-0 z-50 left-0 sticky w-full p-1 bg-zinc-800 flex flex-row justify-center items-center">
            <button onClick={() => setShowPage(false)} type="button" className={`btn btn-primary ${showPage && 'bg-gray-100 text-gray-500 border-gray-700'}`}><FontAwesomeIcon icon={faListSquares} /></button>
            <button onClick={() => setShowPage(true)} type="button" className={`btn btn-primary ml-2 ${!showPage && 'bg-gray-100 text-gray-500 border-gray-700'}`}><FontAwesomeIcon icon={faFile} /></button>
        </div>
        <Sidebar showPage={showPage} printButtonRefFnDownload={reactToPrintFnDownload} printButtonRefFn={reacToPrintFn} />
        <div className="w-full overflow-y-scroll p-3 flex flex-col items-center">
            <Page showPage={showPage} contentRef={contentRef} />
        </div>
    </div>);
}

export default DashboardPage;