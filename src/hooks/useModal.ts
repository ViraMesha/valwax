import { useEffect, useState } from 'react';

interface ModalHook {
  isModal: boolean;
  toggleModal: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const useModal = (): ModalHook => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [originalOverflow, setOriginalOverflow] = useState<string>('');

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const currentTarget = e.currentTarget as HTMLElement;
     
    if (target === currentTarget) {
      setIsModal(false);
    }
  };

  const onEscKeydown = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      setIsModal(false);
    }
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    const handleBodyScroll = (): void => {
       if (isModal) {
        setOriginalOverflow(document.body.style.overflow);
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onEscKeydown); 
      } else {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', onEscKeydown); 
      }
    };

    handleBodyScroll();

    return () => {
      window.removeEventListener('keydown', onEscKeydown);
    };
  }, [isModal, originalOverflow]);

  return {
    isModal,
    toggleModal,
    onBackdropClick,
  };
};

export default useModal;
