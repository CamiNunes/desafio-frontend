import Page from "@/components/Page";
import { useRouter } from 'next/router';
import { useState } from "react";
import api from '../../api';
import Link from "next/link";
import InputMask from "react-input-mask";
import { toast } from 'react-toastify';

export default function Clientes() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [logotipo, setLogotipo] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    const cliente = {
        nome, 
        email, 
        logotipo
    }

    try {
      const response = await api.post('/api/Clientes', cliente);
      toast.success(`Cliente  ${cliente.nome}  salvo com sucesso.`);
      router.push("/clientes/listarClientes");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao salvar cliente: " + cliente.nome);
    }};

    async function handleCancel (){
        router.push(`/clientes/listarClientes`);
    };

    return (
        <Page titulo="Cadastro de Clientes" subtitulo="Teste" nomeUsuario="Camila Nunes">
            <div className="mt-6 container mx-auto pt-4 shadow rounded-md bg-slate-50">
                <Link href="/clientes/listarClientes">
                    <button type="button" className="rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold leading-6 text-white">Voltar</button>  
                </Link>
                <form onSubmit={handleSubmit} className="max-w-full mx-auto">
                    <div className="space-y-12">
                        <div className="">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                                <div className="sm:col-span-4">
                                    <label htmlFor="razao-social" className="block text-sm font-medium leading-6 text-gray-900">Nome</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="nome"
                                            id="nome"
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            autoComplete="nome"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="razao-social" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="razao-social" className="block text-sm font-medium leading-6 text-gray-900">Logotipo</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="logotipo"
                                            id="logotipo"
                                            value={logotipo}
                                            onChange={(e) => setLogotipo(e.target.value)}
                                            autoComplete="logotipo"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className="mt-6 mb-3 flex items-center justify-end gap-x-6">
                        <button type="button" onClick={handleCancel} className="bg-red-900 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded">Cancelar</button>
                        <button type="submit" className="bg-sky-800 hover:bg-sky-600 text-white text-sm font-semibold py-2 px-4 rounded">Salvar</button>
                    </div>
                </form>
            </div>     
        </Page>
    )
}