"use client"

import Link from "next/link";
import { checkLang } from "@/lib/langLogic";
import {useTranslations} from 'next-intl';


export default function AdminDashboardPage() {
  const t = useTranslations('admin');
  const dir = checkLang();
  return (
    <div dir = {dir}>
      <h1 className="text-2xl font-bold">{t("Admin Dashboard")}</h1>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link href="/admin/users" className="text-blue-500 hover:underline">
              
              {t("User Management")}
            </Link>
          </li>
          <li>
            <Link href="/admin/events" className="text-blue-500 hover:underline">
              Event Management
            </Link>
          </li>
          <li>
            <Link href="/admin/payments" className="text-blue-500 hover:underline">
              Payment Management
            </Link>
          </li>
          <li>
            <Link href="/admin/settings" className="text-blue-500 hover:underline">
              System Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
