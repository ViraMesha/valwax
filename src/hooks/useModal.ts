import { useEffect, useState } from 'react';

interface ModalHook {
  isModal: boolean;
  toggleModal: (name?: string) => void;
  onBackdropClick: (id: string) => void;
  activeChildren: string | null;
}

const useModal = (): ModalHook => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [activeChildren, setActiveChildren] = useState<string | null>(null);
  const [originalOverflow, setOriginalOverflow] = useState<string>('');

  const onBackdropClick = (id: string): void => {
    if (id === 'backdrop') setIsModal(false);
  };

  const onEscKeydown = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      setIsModal(false);
    }
  };

  const toggleModal = (name?: string): void => {
    if (name) {
      setActiveChildren(name);
    }
    setIsModal(prev => !prev);
  };

  useEffect(() => {
    const handleBodyScroll = (): void => {
      if (isModal) {
        setOriginalOverflow(document.body.style.overflow);
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = originalOverflow;
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
    activeChildren,
  };
};

export default useModal;
