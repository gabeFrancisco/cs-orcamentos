interface SubtitleProps {
    text: string
}

function Subtitle(props: SubtitleProps) {
    return (<div className="w-full border-t text-center text-zinc-800 border-zinc-500 border-b bg-zinc-200 px-3 py-1 font-bold">
        <p>{props.text}</p>
    </div>);
}

export default Subtitle;