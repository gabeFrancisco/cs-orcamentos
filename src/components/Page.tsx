import Logo from '../../public/logo.svg'

function Page() {
    return (
        <div className="bg-white border border-dashed border-zinc-400 shadow-zinc-400 shadow-lg rounded page">
            <div className='flex flex-row p-10'>
                <img src={Logo} className='w-1/3 text-black' />

            </div>
        </div>
    );
}

export default Page;