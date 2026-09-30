import { useRef } from "react";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import { useReactToPrint } from 'react-to-print'

function DashboardPage() {
    //variaveis de impressão
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef, })

    return (<div className="flex flex-row bg-zinc-200 w-dvw h-dvh">
        <Sidebar printButtonRefFn={reactToPrintFn} />
        <div className="w-full overflow-y-scroll p-3 flex flex-col items-center">
            <Page contentRef={contentRef} />
        </div>
    </div>);
}

export default DashboardPage;