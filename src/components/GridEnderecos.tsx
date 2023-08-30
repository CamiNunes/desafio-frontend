import api from "@/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function GridEnderecos ({ clienteId } : any){
    const [logradouros, setLogradouros]=useState([]);

    async function getEnderecos(){
        const response = await api.get(`/api/Logradouros/` + clienteId)
        .then(response => {
            setLogradouros(response.data.result);
        }).catch(error => {
           toast.error("Erro ao carregar dados. " + error)
        })
    };

    useEffect(() => {
        getEnderecos()
        }, []
    );

    return(
        <div className="mt-6 overflow-auto rounded-lg shadow hidden md:block">
            <table className="w-full">
                <thead className="text-left text-white border-b-2 border-gray-200 bg-slate-700">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Tipo</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Endereço</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Número</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Bairro</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">Cidade</th>
                    <th className="p-3 text-sm font-semibold tracking-wide ext-left">UF</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {logradouros && logradouros.map((logradouro: any)=>(
                    <tr key={logradouro.clienteId}>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.tipo}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.endereco}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.numero}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.bairro}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.cidade}</td>
                        <td className="text-left w-auto p-3 text-sm text-gray-700 whitespace-nowrap">{logradouro.uf}</td>
                        <td className="text-right pb-3 pr-3">
                        <Link className="bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold py-2 px-4 rounded" href={`/logradouros/editar/${logradouro.clienteId}`}>Editar</Link> { }
                        {/* <button className="bg-red-900 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded" onClick={() => handleDeleteClick(logradouro.clienteId)}>Excluir</button> */}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}