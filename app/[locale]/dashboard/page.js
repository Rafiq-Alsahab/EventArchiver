import Link from "next/link";

import {useTranslations} from 'next-intl';


export default function DashboardPage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1 className="text-2xl font-bold">Event Owner Dashboard</h1>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard/create-event" className="text-blue-500 hover:underline">
              {t('title')}
              Create New Event
            </Link>
          </li>
          <li>
            <Link href="/dashboard/event/1" className="text-blue-500 hover:underline">
              Manage Event (Example Event)
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile" className="text-blue-500 hover:underline">
              Profile / Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
