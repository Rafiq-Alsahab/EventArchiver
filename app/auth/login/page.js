import { useTranslation } from 'next-i18next';
import { signIn } from 'next-auth/react';

export default function Login() {
  const { t } = useTranslation('common');
  return (
    <div>
      <h1>{t('login')}</h1>
      <button onClick={() => signIn()}>
        {t('sign_in')}
      </button>
    </div>
  );
}