import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getInitials } from "@/lib/utils"

const UserCard = ({ user }) => {
  const initials = getInitials(user?.name)

  return (
    <Card className="group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-foreground/25">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />

      <CardHeader className="justify-items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
          {initials || "?"}
        </div>
        <div className="mt-2 flex min-w-0 flex-col gap-1">
          <CardTitle>{user?.name}</CardTitle>
          <CardDescription className="flex min-w-0 items-center justify-center gap-1.5">
            <Mail className="size-3.5 shrink-0" />
            <span className="truncate">{user?.email}</span>
          </CardDescription>
        </div>
      </CardHeader>

      <CardFooter>
        <Link href={`/user/${user?._id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Profile
            <ArrowRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default UserCard
