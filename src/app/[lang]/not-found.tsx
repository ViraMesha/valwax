'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CustomLink from '@components/components/shared/CustomLink/CustomLink';

import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../lib/utils/dictionary';

interface DictionaryState {
  text: string;
  linkText: string;
}

export default function NotFound() {
  const [dictionary, setDictionary] = useState<DictionaryState | null>(null);
  const pathName = usePathname();
  const lang: Locale = pathName ? (pathName.split('/')[1] as Locale) : 'uk';

  useEffect(() => {
    async function fetchData() {
      try {
        const { page } = await getDictionary(lang);
        setDictionary(page.notFound);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [lang]);

  return (
    <div>
      <h2>404</h2>
      <p>{dictionary?.text}</p>
      <CustomLink variant="secondary" href={`/`}>
        {dictionary?.linkText}
      </CustomLink>
    </div>
  );
}
