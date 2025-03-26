import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link href="/admin/users" className="text-blue-500 hover:underline">
              User Management
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
