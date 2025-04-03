'use client';


import { signIn } from 'next-auth/react';

import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();

  return (
    <div>
    <h1>{t('login')}</h1>
    <button onClick={() => signIn()}>
      {t('sign_in')}
    </button>
  </div>
  );
}
