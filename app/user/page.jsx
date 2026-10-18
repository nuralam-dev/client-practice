import Link from "next/link"
import { UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import UserCard from "../../components/UserCard"

const UsersPage = async () => {
  const res = await fetch("http://localhost:4000/user", { cache: "no-store" })
  const users = await res.json()

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Users</h1>
        <Button render={<Link href="/user/add" />}>
          <UserPlus />
          Add user
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default UsersPage
