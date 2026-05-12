import { updateUser } from "@/app/lib/action";
import { getUserById } from "@/app/lib/data";
import EditForm from "@/components/users/EditForm";

async function EditUser({ params }) {
  const { id } = await params;
  // console.log(id);

  const user = await getUserById(id);

  const updateUserWrapper = async (formData) => {
    "use server";
    // const result = await updateUser(id, formData);
    // console.log(result);
    return updateUser(id, formData);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
          {/* Top Banner */}
          <div className="bg-indigo-600 px-8 py-6">
            <h1 className="text-2xl font-bold text-white">Edit User</h1>
            <p className="text-indigo-200 text-sm mt-1">
              Update the details for{" "}
              <span className="font-semibold text-white">{user.name}</span>
            </p>
          </div>

          {/* Form */}
          <EditForm updateUserWrapper={updateUserWrapper} user={{ user }} />
        </div>
      </div>
    </div>
  );
}

export default EditUser;
