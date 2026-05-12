// "use client";

import { updateUser } from "@/app/lib/action";
import Link from "next/link";
import React from "react";
function EditForm({ updateUserWrapper, user }) {
  // console.log(user);

  return (
    <form action={updateUserWrapper} className="px-8 py-6 space-y-5">
      {/* Name */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          defaultValue={user.user?.name}
          placeholder="e.g. Karim Hasan"
          required
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="e.g. karim@example.com"
          required
          defaultValue={user.user?.email}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
        />
      </div>

      {/* Role */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
          Role
        </label>
        <select
          name="role"
          defaultValue={user.user?.role}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
        >
          <option value="user">User</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <Link
          href="/users"
          className="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition text-center"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default EditForm;
