import api from '@/api';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface MyModalProps {
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

const ModalNova: React.FC<MyModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    // Defina os campos do seu formulário aqui
        clienteId : '',
        cep : '', 
        tipo : '',  
        endereco : '',
        numero : '', 
        bairro : '', 
        cidade : '',
        uf : ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode fazer a lógica para enviar os dados para o servidor

    try {
        const response = await api.post('/api/Logradouros', formData);
        toast.success(`Registro salvo com sucesso.`);
        console.log(formData);
      } catch (error) {
        console.error(error);
        toast.error("Erro ao salvar registro.");
      }
    
    console.log('Dados submetidos:', formData);
    onClose(); // Fechar o modal após submissão
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onSubmit(formData);
//     onClose();
//   };

return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Cep:
            <input
              type="text"
              value={formData.cep}
              onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
            />
          </label>
          <label>
            Tipo:
            <input
              type="tipo"
              value={formData.tipo}
              onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
            />
          </label>
          <label>
            Endereco:
            <input
              type="text"
              value={formData.endereco}
              onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
            />
          </label>
          <label>
            Número:
            <input
              type="text"
              value={formData.numero}
              onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
            />
          </label>

          <label>
            Bairro:
            <input
              type="text"
              value={formData.bairro}
              onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
            />
          </label>
          <label>
            Cidade:
            <input
              type="text"
              value={formData.cidade}
              onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
            />
          </label>
          <label>
            Numero:
            <input
              type="text"
              value={formData.numero}
              onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalNova;