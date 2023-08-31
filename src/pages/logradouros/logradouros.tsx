import Page from "@/components/Page";
import { useRouter } from 'next/router';
import { useState } from "react";
import api from '../../api';
import Link from "next/link";
import InputMask from "react-input-mask";
import { toast } from 'react-toastify';

export default function Logradouros() {
    const router = useRouter();
    const { id } = router.query;

    const [clienteId, setClienteId] = useState(id);
    const [cep, setCep] = useState('');
    const [tipo, setTipo] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

    const logradouro = {
        clienteId,
        cep, 
        tipo, 
        endereco,
        numero,
        complemento,
        bairro,
        cidade,
        uf
    }

    try {
      const response = await api.post('/api/Logradouros', logradouro);
      toast.success(`Registro salvo com sucesso.`);
      router.push(`/clientes/editar/${id}`);
      console.log(logradouro);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao salvar registro.");
    }};


    async function handleCancel (){
        router.push(`/clientes/editar/${id}`);
        console.log(`/clientes/editar/${id}`);
    };

    return (
        <Page titulo="Cadastro de Clientes" subtitulo="" nomeUsuario="">
            <div className="mt-6 container mx-auto pt-4 shadow rounded-md bg-slate-50">
                <Link href={`/clientes/editar/${id}`}>
                    <button type="button" className="rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold leading-6 text-white">Voltar</button>  
                </Link>
                <form onSubmit={handleSubmit} className="max-w-full mx-auto">
                    <div className="space-y-12">
                        <div className="">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                                <div className="sm:col-span-3" hidden>
                                    <label htmlFor="clienteId" className="block text-sm font-medium leading-6 text-gray-900">Código</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="clienteId"
                                            id="clienteId"
                                            value={id}
                                            onChange={(e) => setClienteId(e.target.value)}
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-1">
                                    <label htmlFor="cep" className="block text-sm font-medium leading-6 text-gray-900">Cep</label>
                                    <div className="mt-2">
                                        <InputMask mask="99.999-999"
                                            id="cep"
                                            name="cep"
                                            type="text"
                                            value={cep}
                                            onChange={(e) => setCep(e.target.value)}
                                            autoComplete="cep"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="tipo" className="block text-sm font-medium leading-6 text-gray-900">Tipo</label>
                                    <div className="mt-2">
                                    <select
                                        id="tipo"
                                        name="tipo"
                                        value={tipo}
                                        onChange={(e) => setTipo(e.target.value)}
                                        autoComplete="tipo"
                                        className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                        <option value="Selecione uma Cidade">Selecione um Tipo</option>
                                        <option>Av.</option>
                                        <option>Rua</option>
                                        <option>Travessa</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="endereco" className="block text-sm font-medium leading-6 text-gray-900">Endereço</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="endereco"
                                            id="endereco"
                                            value={endereco}
                                            onChange={(e) => setEndereco(e.target.value)}
                                            autoComplete="nome"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-21">
                                    <label htmlFor="razao-social" className="block text-sm font-medium leading-6 text-gray-900">Número</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="numero"
                                            id="numero"
                                            value={numero}
                                            onChange={(e) => setNumero(e.target.value)}
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="razao-social" className="block text-sm font-medium leading-6 text-gray-900">Complemento</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="complemento"
                                            id="complemento"
                                            value={complemento}
                                            onChange={(e) => setComplemento(e.target.value)}
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-5">
                                    <label htmlFor="razao-social" className="block text-sm font-medium leading-6 text-gray-900">Bairro</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="bairro"
                                            id="bairro"
                                            value={bairro}
                                            onChange={(e) => setBairro(e.target.value)}
                                            autoComplete="logotipo"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-5">
                                    <label htmlFor="razao-social" className="block text-sm font-medium leading-6 text-gray-900">Cidade</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="cidade"
                                            id="cidade"
                                            value={cidade}
                                            onChange={(e) => setCidade(e.target.value)}
                                            autoComplete="cidade"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="razao-social" className="block text-sm font-medium leading-6 text-gray-900">Estado</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="estado"
                                            id="estado"
                                            value={uf}
                                            onChange={(e) => setUf(e.target.value)}
                                            autoComplete="estado"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className="mt-6 mb-3 pb-3 flex items-center justify-end gap-x-6">
                        <button type="button" onClick={handleCancel} className="bg-red-900 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded">Cancelar</button>
                        <button type="submit" className="bg-sky-800 hover:bg-sky-600 text-white text-sm font-semibold py-2 px-4 rounded">Salvar</button>
                    </div>
                </form>
            </div>     
        </Page>
    )
}