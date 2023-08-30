import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../app/globals.css'

export default function App(props: any) {
    const { Component, pageProps } = props
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer position="top-right" autoClose={3000} theme="dark" />
        </>
    )
}
