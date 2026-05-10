// import { cacheLife } from "next/cache";

export async function getUsers() {
  //   'use cache'
  //   cacheLife('hours')
  //   return db.query('SELECT * FROM users')

  const req = await fetch("http://localhost:4000/users");
  const res = await req.json();
  return res;
}

export async function getUserById(id) {
  const req = await fetch(`http://localhost:4000/users/${id}`);
  const res = await req.json();
  return res;
}
