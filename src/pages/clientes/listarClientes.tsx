import Page from "@/components/Page";
import { useEffect, useState } from "react";
import api from '../../api';
import Link from "next/link";
import InputMask from "react-input-mask";

import { 
  IconTrashX, 
  IconEdit,
  IconFilter
} from "@tabler/icons-react";
import { toast } from "react-toastify";

export default function Clientes() {

  const [clientes, setClientes]=useState([]);

  useEffect(()=>{
    getClientes()
  }, [clientes])

  async function getClientes(){
    const response = await api.get('/api/Clientes')
    .then(response => {
      setClientes(response.data.result);
    }).catch(error => {
       toast.error("Erro ao carregar dados. " + error)
    })
  };

  async function handleDeleteClick(idCliente: string){
      const response = await api.delete('/api/Clientes/' + idCliente)
      .then(response => {
        setClientes(response.data.result);
        toast.success("Registro deletado com sucesso.", response.data)
      
    }).catch(error => {
      toast.error("Erro ao deletar registro.", error)
    })
  }

  return (
    <Page titulo="Listagem de Clientes" subtitulo="" nomeUsuario="">
      <form className="container max-w-full">
        <div className="mt-6 container mx-auto pt-4 shadow rounded-md bg-slate-50">
          <Link href="/clientes/clientes">
            <button type="button" className="rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold leading-6 text-white">Novo Cliente</button>     
          </Link>
          <div className="mt-6 overflow-auto rounded-lg shadow hidden md:block">
            <table className="w-full">
              <thead className="text-left text-white border-b-2 border-gray-200 bg-slate-700">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide ext-left">Nome</th>
                  <th className="p-3 text-sm font-semibold tracking-wide ext-left">Email</th>
                  <th className="p-3 text-sm font-semibold tracking-wide ext-left">LogoTipo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {clientes && clientes.map((cliente: any)=>(
                    <tr key={cliente.clienteId}>
                      <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{cliente.nome}</td>
                      <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{cliente.email}</td>
                      <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{cliente.logotipo}</td>
                      <td className="text-right pb-3 pr-3">
                        <Link className="bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold py-2 px-4 rounded" href={`/clientes/editar/${cliente.clienteId}`}>Editar</Link> { }
                        <button className="bg-red-900 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded" onClick={() => handleDeleteClick(cliente.clienteId)}>Excluir</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 gap-4 md:hidden">
            <div>
              <div>

              </div>
            </div>        
          </div>
        </div>
      </form>
    </Page>
  )
}