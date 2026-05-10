async function UserDetailsPage({ params }) {
  const { id } = await params;
  console.log(id);

  return <div>UserDetailsPage</div>;
}

export default UserDetailsPage;
