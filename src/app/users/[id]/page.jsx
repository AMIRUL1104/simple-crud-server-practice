import { getUserById } from "@/app/lib/data";
import Link from "next/link";

async function UserDetailsPage({ params }) {
  const { id } = await params;
  const userData = await getUserById(id);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
          {/* Top Banner */}
          <div className="bg-indigo-600 h-24 w-full" />

          {/* Avatar */}
          <div className="flex justify-center -mt-12 mb-4">
            <div className="w-24 h-24 rounded-full bg-indigo-100 text-indigo-600 border-4 border-white shadow flex items-center justify-center text-4xl font-bold uppercase">
              {userData.name?.charAt(0)}
            </div>
          </div>

          {/* Name & Role */}
          <div className="text-center px-6 pb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {userData.name}
            </h2>

            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mt-2
                ${
                  userData.role === "admin"
                    ? "bg-purple-100 text-purple-700"
                    : userData.role === "moderator"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-green-100 text-green-700"
                }`}
            >
              {userData.role}
            </span>

            {/* Divider */}
            <div className="border-t border-gray-100 my-6" />

            {/* Info Fields */}
            <div className="space-y-4 text-left">
              <div className="bg-gray-50 rounded-xl px-4 py-3">
                <p className="text-xs text-gray-400 font-medium mb-1">
                  User ID
                </p>
                <p className="text-sm text-gray-700 font-mono break-all">
                  {userData._id}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl px-4 py-3">
                <p className="text-xs text-gray-400 font-medium mb-1">
                  Full Name
                </p>
                <p className="text-sm text-gray-800 font-medium">
                  {userData.name}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl px-4 py-3">
                <p className="text-xs text-gray-400 font-medium mb-1">
                  Email Address
                </p>
                <p className="text-sm text-gray-800">{userData.email}</p>
              </div>

              <div className="bg-gray-50 rounded-xl px-4 py-3">
                <p className="text-xs text-gray-400 font-medium mb-1">Role</p>
                <p className="text-sm text-gray-800 capitalize">
                  {userData.role}
                </p>
              </div>
            </div>

            {/* Back Button */}
            <Link
              href="/users"
              className="mt-6 w-full inline-block text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200"
            >
              ← Back to Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsPage;
