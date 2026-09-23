interface SubtitleProps {
    text: string
}

function Subtitle(props: SubtitleProps) {
    return (<div className="w-full bg-zinc-400 p-3">
        <p>{props.text}</p>
    </div>);
}

export default Subtitle;