import { useFormik } from 'formik';
import LoginImage from '../../public/login.svg'
import Logo from '../../public/logo.svg'

function LoginPage() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {

        }
    })
    return (
        <div className="bg-zinc-200 w-screen h-screen p-5 flex flex-col items-center">
            <div className="lg:m-10 m-20 bg-white flex flex-col items-center sm:w-full md:w-3/6 lg:w-2/6 p-6 text-zinc-700 rounded-lg border border-zinc-200 shadow">
                <img src={Logo} alt="Logo" className='w-1/2' />
                <h1 className='text-2xl font-bold mt-2 mb-5'>Login</h1>
                <p className='mb-5 text-sm text-center'>Preencha seu email e senha para entrar no sistema de orçamentos!</p>

                <form onSubmit={formik.handleSubmit}>

                    <div>
                        <label htmlFor="email" className='txt-label'>Email</label>
                        <input type="text" className='txt-input' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="email" className='txt-label'>Senha</label>
                        <input type="password" className='txt-input' />
                    </div>
                    <button type='submit' className='btn btn-primary w-full mt-3 cursor-pointer'>Entrar!</button>
                </form>
            </div>
            {/* <div className='flex flex-col justify-evenly items-center'>
                <img src={Logo} alt="Logo" className='w-1/2' />
                <img src={LoginImage} alt="Login" className='w-1/2 -mr-12' />
            </div> */}
        </div>
    );
}

export default LoginPage;