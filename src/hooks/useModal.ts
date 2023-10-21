import { useEffect, useState } from 'react';

interface ModalHook {
  isModal: boolean;
  toggleModal: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const useModal = (
  headerRef: React.RefObject<HTMLDivElement>
): ModalHook => {
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
      } else {
        document.body.style.overflow = originalOverflow;
      }
    };

    const handleHeaderClick = (e: MouseEvent) => {
      if (
        headerRef &&
        headerRef.current &&
        headerRef.current.contains(e.target as Node)
      ) {
        setIsModal(false);
      }
    };

    window.addEventListener('keydown', onEscKeydown);
    handleBodyScroll();

    document.addEventListener('click', handleHeaderClick);

    return () => {
      window.removeEventListener('keydown', onEscKeydown);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('click', handleHeaderClick);
    };
  }, [isModal, originalOverflow, headerRef]);

  return {
    isModal,
    toggleModal,
    onBackdropClick,
  };
};

export default useModal;
