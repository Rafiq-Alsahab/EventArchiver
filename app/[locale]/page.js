"use client"

import {useTranslations} from 'next-intl';
import {checkLang} from '@/lib/langLogic';
 


export default function HomePage() {

  const dir = checkLang();
  const t = useTranslations('HomePage')
    return (
      <div className="text-center bg-amber-700" dir={dir}>
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="mt-4">{t('about')}</p>
      </div>
    );
  }
  