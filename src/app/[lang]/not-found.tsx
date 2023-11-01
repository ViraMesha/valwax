import { usePathname } from 'next/navigation';
import CustomLink from '@components/components/shared/CustomLink/CustomLink';

import { getDictionary } from '../../../lib/utils/dictionary';

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Oops, something went wrong.</p>
      <CustomLink variant="secondary" href={`/`}>
        Return Home
      </CustomLink>
    </div>
  );
}
