'use client';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@components/components/Button/Button';
import { CartProductI } from '@components/types';

import { useStateActionsContext } from '../../../../../../context/StateContext';

interface ConfiguratorBuyNowBtnProps {
  children: React.ReactNode;
  product: CartProductI;
}

const ConfiguratorBuyNowBtn: React.FC<ConfiguratorBuyNowBtnProps> = ({
  children,
  product,
}) => {
  const { onAdd } = useStateActionsContext();
  const pathName = usePathname();
  const router = useRouter();
  const lang = pathName.split('/')[1];

  const handleBuyNowButtonClick = () => {
    onAdd(product);
    router.push(`/${lang}/checkout`);
  };

  return (
    <Button variant="primary" onClick={handleBuyNowButtonClick}>
      {children}
    </Button>
  );
};

export default ConfiguratorBuyNowBtn;
