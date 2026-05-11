import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUser(formData) {
  "use server";
  const newUser = Object.fromEntries(formData.entries());

  const req = await fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const res = await req.json();

  if (res.insertedId) {
    redirect("/users");
  }
  // console.log(res);

  return res;
}

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
