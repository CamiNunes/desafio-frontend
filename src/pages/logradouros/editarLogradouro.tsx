import Page from "@/components/Page";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../api';
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import Link from "next/link";

const EditarLogradouro = () => {
  const router = useRouter();
  const { clienteId, logradouroId } = router.query;
  const [registro, setRegistro] = useState<any>(null); // Defina o tipo adequado para o seu registro

  useEffect(() => {
      const fetchRegistro = async () => {
          try {
              const response = await api.get(`/api/Logradouros/` + clienteId); 
              setRegistro(response.data.result[0]);
          } catch (error) {
          console.error('Erro ao obter os dados do registro:', error);
          }};

          if (clienteId) {
              fetchRegistro();
          }

      }, [clienteId, logradouroId]
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } : any = event.target;
      setRegistro((prevData: any) => ({
        ...prevData,
        [name]: value,
      }));
  };

  const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      api.put(`/api/Logradouros/${clienteId}/${logradouroId}`, registro)
      .then(() => {
          console.log(registro);
          toast.success("Registro atualizado com sucesso.")
          router.push(`/clientes/editar/${clienteId}`);
      });
  };  

  async function handleCancel (){
      router.push(`/clientes/editar/${clienteId}`);
  };

  if (!registro) {
      return <div>Carregando...</div>;
  }

//   useEffect(() => {
//     // Exemplo de uso dos parâmetros da rota
//     console.log('Cliente ID:', clienteId);
//     console.log('Logradouro ID:', logradouroId);
//   }, [clienteId, logradouroId]);

  return (
    <Page titulo="Cadastro de Clientes" subtitulo="" nomeUsuario="">
        <div className="mt-6 container mx-auto pt-4 shadow rounded-md bg-slate-50">
            <Link href={`/clientes/editar/${clienteId}`}>
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
                                        value={registro.clienteId}
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
                                        defaultValue={registro.cep}
                                        onChange={handleInputChange}
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
                                    defaultValue={registro.tipo}
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
                                        defaultValue={registro.endereco}
                                        onChange={handleInputChange}
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
                                        defaultValue={registro.numero}
                                        onChange={handleInputChange}
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
                                        defaultValue={registro.complemento}
                                        onChange={handleInputChange}
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
                                        defaultValue={registro.bairro}
                                        onChange={handleInputChange}
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
                                        defaultValue={registro.cidade}
                                        onChange={handleInputChange}
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
                                        defaultValue={registro.uf}
                                        onChange={handleInputChange}
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
);
};

export default EditarLogradouro;