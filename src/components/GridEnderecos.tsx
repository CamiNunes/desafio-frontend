import api from "@/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";
import { useRouter } from 'next/router';

export default function GridEnderecos ({ clienteId } : any){
    const [logradouros, setLogradouros]=useState([]);
    const router = useRouter();

    async function getEnderecos(){
        const response = await api.get(`/api/Logradouros/` + clienteId)
        .then(response => {
            setLogradouros(response.data.result);
        }).catch(error => {
           toast.error("Erro ao carregar dados. " + error)
        })
    };

    async function handleDelete(clienteId: string, logradouroId: string){
        const response = await api.delete('/api/Logradouros/' + clienteId + '/' + logradouroId )
        .then(response => {
            setLogradouros(response.data.result);
            toast.success("Registro deletado com sucesso.", response.data)
            router.push(`/clientes/editar?id=${clienteId}`);
      }).catch(error => {})
    }

    useEffect(() => {
        getEnderecos()
        }, [logradouros]
    );

    return(
        <div className="mt-6 overflow-auto rounded-lg shadow hidden md:block">
            <table className="w-full">
                <thead className="text-left text-white border-b-2 border-gray-200 bg-slate-700">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Cep</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Tipo</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Endereço</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Número</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Complemento</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Bairro</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Cidade</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">UF</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {logradouros && logradouros.map((logradouro: any)=>(
                    <tr key={logradouro.clienteId}>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">
                            <InputMask mask="99.999-999" value={logradouro.cep} readOnly />
                        </td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.tipo}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.endereco}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.numero}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.complemento}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.bairro}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.cidade}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.uf}</td>
                        <td className="text-right pb-3 pr-3">
                            <Link className="bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold py-2 px-4 rounded" href={`/${logradouro.clienteId}/${logradouro.logradouroId}`}>Editar</Link> { }
                            <button className="bg-red-900 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded" onClick={() => handleDelete(logradouro.clienteId, logradouro.logradouroId)}>Excluir</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}