interface HeaderProps {
  titulo: string
  subtitulo: string
  className?: string
}

export default function HeaderClean(props: HeaderProps) {
  return (
      <div className={`
          flex flex-row justify-between items-center px-5
          border-b border-zinc-700 
          ${props.className ?? ''}
      `}>
          <h1 className="text-xl font-black">{props.titulo}</h1>
          <h2 className="text-sm text-zinc-400">{props.subtitulo}</h2>
      </div>
  )
}