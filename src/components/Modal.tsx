import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, closeModal, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !modalRef.current?.contains(e.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className='relative bg-[color:var(--highlight)] w-full max-w-6xl h-full max-h-[90vh] overflow-y-auto rounded-2xl flex flex-col gap-5 p-10 m-15'
      >
        <button className='absolute top-5 right-5' onClick={closeModal}>
          <X className='w-6 h-6' />
        </button>
        {children}
      </motion.div>
    </div>
  );
}
