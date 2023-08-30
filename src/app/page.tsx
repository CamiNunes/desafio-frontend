import Page from "@/components/Page";
import { IconDatabasePlus } from "@tabler/icons-react";

export default function Home() {


  return (
    <Page titulo="Olá, Bem-vindo(a)" subtitulo="" nomeUsuario="">
      <div className={`
        flex flex-col justify-center items-center
        w-full h-full text-zinc-500
      `}>
        <IconDatabasePlus size={200} stroke={1} />
        <span className="font-black ">Cadastro de Clientes</span>
      </div>
    </Page>
  )
}
