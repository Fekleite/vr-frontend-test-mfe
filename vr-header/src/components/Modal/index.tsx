import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '../CloseIcon';

interface IModalProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ title, children, isOpen, onClose }: IModalProps) {
  return createPortal(
    <>
      <div
        className={`fixed inset-0 z-50 flex justify-end ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`bg-neutral-900 opacity-50 absolute inset-0 ${isOpen ? 'block' : 'hidden'}`}
        />
        <div
          data-testid="vr-header-modal-test"
          className={`w-full max-w-full xl:max-w-2xl lg:max-w-lg md:max-w-md h-screen flex flex-col px-4 lg:px-10 py-2 lg:py-4 bg-white relative transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <header className="flex items-center justify-between py-4 lg:py-6 border-b border-neutral-100">
            <h3 className="text-2xl text-neutral-900 font-bold">{title}</h3>

            <button
              data-testid="vr-header-modal-close-button-test"
              type="button"
              className="p-2"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </header>

          <div className="my-6 flex-1">{children}</div>

          <footer className="flex items-center justify-between py-6 border-t border-neutral-100">
            <button
              type="button"
              className="h-10 lg:h-8 px-4 rounded-full bg-brand hover:opacity-80 duration-200 text-neutral-50 text-sm font-semibold"
            >
              Concluir compras
            </button>

            <button
              type="button"
              className="h-10 lg:h-8 px-4 rounded-full hover:bg-neutral-50 duration-200 text-neutral-900 text-sm font-semibold"
              onClick={onClose}
            >
              Cancelar
            </button>
          </footer>
        </div>
      </div>
    </>,
    document.body,
  );
}
