import HeaderClean from './HeaderClean';
import Content from './Content'
import Footer from './Footer'
import Logo from './Logo';

interface PageProps {
    titulo: string
    subtitulo: string
    children: any
}

export default function Page(props: PageProps) {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col flex-1">
                <HeaderClean 
                    titulo={props.titulo}
                    subtitulo={props.subtitulo}
                    className="h-16 bg-zinc-800 text-slate-300"
                />
                <Content>{props.children}</Content>
                <Footer
                    textoEsquerda="💻 Desenvolvido por Camila Nunes"
                    textoDireita={`${new Date().getFullYear()}`}
                />
            </div>
        </div>
    )
}