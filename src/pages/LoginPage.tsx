import { useFormik } from 'formik';
import Logo from '../../public/logo.svg'
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import useAppStore from '../store/store';
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';

function LoginPage() {
    const navigate = useNavigate();
    const setUser = useAppStore((state) => state.setUser);

    const [errorState, setErrorState] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function checkSession() {
            const { data } = await supabase.auth.getSession();

            if (data.session) {
                navigate("/");
            }
        }

        checkSession();
    }, [navigate]);

    const formik = useFormik({
        initialValues: {
            email: "",
            senha: ""
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: Yup.object({
            email: Yup.string().email("Email deve ser válido!").required("Digite seu e-mail!"),
            senha: Yup.string().required("Digite sua senha!!")
        }),
        onSubmit: async (values) => {
            setLoading(true)
            setErrorState(false)

            const { data, error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.senha
            })

            if (error) {
                setErrorState(true)
                setLoading(false)
                return
            }

            setUser(data.user)
            navigate("/")
        }
    })
    return (
        <div className="bg-zinc-300 w-screen h-screen p-5 flex flex-col items-center">
            <div className="lg:m-10 m-20 bg-white flex flex-col items-center sm:w-full md:w-3/6 lg:w-2/6 p-6 text-zinc-700 rounded-lg border border-zinc-200 shadow">
                <img src={Logo} alt="Logo" className='w-1/2' />
                <h1 className='text-2xl font-bold mt-2 mb-5'>Login</h1>
                <p className='mb-5 text-sm text-center'>Preencha seu email e senha para entrar no sistema de orçamentos!</p>

                <form className='w-4/5' onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="email" className='txt-label'>Email</label>
                        <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} id='email' className='txt-input py-2' />
                        {formik.errors.email && <small className='text-red-500  '>{formik.errors.email}</small>}
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="senha" className='txt-label'>Senha</label>
                        <input type="password" name='senha' value={formik.values.senha} onChange={formik.handleChange} id='senha' className='txt-input py-2' />
                        {formik.errors.senha && <small className='text-red-500 w-1/2'>{formik.errors.senha}</small>}
                    </div>
                    {errorState && <div className='px-3 py-1 mt-3 border-b border-read-300 text-red-500'>
                        Email ou senha inválidos!
                    </div>}
                    <button type='submit' disabled={loading} className='btn btn-primary disabled:bg-zinc-300 disabled:border-zinc-400 disabled:text-zinc-800     w-full mt-3 cursor-pointer'>{loading ? "Aguarde..." : "Entrar!"}</button>
                </form>
            </div>
            <p className='text-slate-600'>Desenvolvido por Gabriel Francisco</p>
            <a className='text-sky-700' href="https://github.com/gabefrancisco" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
    );
}

export default LoginPage;