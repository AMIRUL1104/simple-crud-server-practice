import { createUser } from "@/app/lib/action";
import NewUserForm from "@/components/users/NewUserForm";

function NewUser() {
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
          {/* Top Banner */}
          <div className="bg-indigo-600 px-8 py-6">
            <h1 className="text-2xl font-bold text-white">Create New User</h1>
            <p className="text-indigo-200 text-sm mt-1">
              Fill in the details below
            </p>
          </div>

          {/* Form */}
          <NewUserForm createUser={createUser} />
        </div>
      </div>
    </div>
  );
}

export default NewUser;
