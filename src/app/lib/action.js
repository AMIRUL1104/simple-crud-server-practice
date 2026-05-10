import { revalidatePath } from "next/cache";

export async function deleteUser(userId) {
  "use server";
  const req = await fetch(`http://localhost:4000/users/${userId}`, {
    method: "DELETE",
  });
  const res = await req.json();

  if (res.deletedCount > 0) {
    revalidatePath("/users");
  }
  return res;

  // Verify the user owns this resource before deleting
  // Mutate data
  // Revalidate cache
}
