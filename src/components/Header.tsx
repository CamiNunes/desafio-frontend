import Link from "next/link"

interface HeaderProps {
  titulo: string
  subtitulo: string
  nomeUsuario: string
  className?: string
}

export default function Header(props: HeaderProps) {  
  // const handleLogout = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   localStorage.removeItem('jwt-Token');
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
            <button type="button" className="rounded-md bg-zinc-200 px-3 py-3 text-sm font-semibold text-black shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600">Sair</button>
          </div>
      </div>
  )
}