import Deleteuser from "@/components/users/Deleteuser";
import UpdateUser from "@/components/users/UpdateUser";
import { getUsers } from "../lib/data";
import Link from "next/link";
import { deleteUser } from "../lib/action";

async function UsersPage() {
  const userData = await getUsers();
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage all registered users
          </p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="text-center px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {userData.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  {/* Serial */}
                  <td className="px-6 py-4 text-gray-400 font-medium">
                    {index + 1}
                  </td>

                  {/* Name with avatar */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm uppercase flex-shrink-0">
                        {user.name?.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">
                        {user.name}
                      </span>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>

                  {/* Role Badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-700"
                            : user.role === "moderator"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-green-100 text-green-700"
                        }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <UpdateUser userId={user._id} />
                      <Deleteuser deleteAction={deleteUser} userId={user._id} />
                      <Link
                        className=" text-blue-700  hover:underline"
                        href={`/users/${user._id}`}
                      >
                        Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty state */}
          {userData.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg font-medium">No users found</p>
              <p className="text-sm mt-1">Users will appear here once added.</p>
            </div>
          )}

          {/* Footer */}
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-400">
            Total: {userData.length} user{userData.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
