import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Event Owner Dashboard</h1>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard/create-event" className="text-blue-500 hover:underline">
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
