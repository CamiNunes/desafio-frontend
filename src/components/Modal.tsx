import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
  }

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="z-50 bg-white p-6 rounded-lg shadow-lg">
          <button type="button" className="bg-red-900 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded" onClick={onClose}>Fechar</button>
            {children}
          </div>
        </div>
      );
  };
  
  export default Modal;

  