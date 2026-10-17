import UserCard from "../../components/UserCard"

const page = async () => {
  const res = await fetch("http://localhost:4000/user")
  const user = await res.json()
  return (
    <div className="grid grid-cols-3 gap-2 mt-3">
      {user.map((user) => (
        <UserCard key={user._id} user={user}></UserCard>
      ))}
    </div>
  )
}

export default page
