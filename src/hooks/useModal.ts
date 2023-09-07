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
    
    if (!target.matches('input')) {
      setIsModal(false);
    }
  };

  const onEscKeydown = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      setIsModal(false);
    }
  };

  const toggleModal = () => {
    setIsModal(true);
  };

  useEffect(() => {
    const handleBodyScroll = (): void => {
      if (isModal) {
        setOriginalOverflow(document.body.style.overflow);
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
      } else {
        document.body.style.overflow = originalOverflow;
        document.body.classList.remove('modal-open');
      }
    };

    window.addEventListener('keydown', onEscKeydown);
    handleBodyScroll();

    return () => {
      window.removeEventListener('keydown', onEscKeydown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModal, originalOverflow]);

  return {
    isModal,
    toggleModal,
    onBackdropClick,
  };
};

export default useModal;
