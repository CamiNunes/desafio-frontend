// import { redirect } from 'next/navigation';
//import { useRouter } from 'next/router';

interface HeaderProps {
  titulo: string
  subtitulo: string
  nomeUsuario: string
  className?: string
}

export default function Header(props: HeaderProps) {

  //const router = useRouter();
  
  // const handleLogout = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   localStorage.removeItem('jwtToken');
  //   window.location.href = '/login';
  // };  

  return (
      <div className={`
          flex flex-row justify-between items-center px-5
          border-b border-zinc-700 
          ${props.className ?? ''}
      `}>
          <h1 className="text-xl font-black">{props.titulo}</h1>
          <h2 className="text-sm text-zinc-400">{props.subtitulo}</h2>
          <div className="flex flex-row justify-center items-center px-5 mx-5">
            <h3 className="text-sm text-zinc-400 px-5">Bem vindo(a), {props.nomeUsuario}</h3>
            <button type="button" className="rounded-md bg-zinc-200 px-3 py-3 text-sm font-semibold text-black shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600" >Sair</button>
          </div>
          
          
      </div>
  )
}