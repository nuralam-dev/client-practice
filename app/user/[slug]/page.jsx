import { ArrowLeft, Mail, User } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getInitials } from "@/lib/utils"

const getUser = async (id) => {
  const res = await fetch("http://localhost:4000/user", { cache: "no-store" })
  if (!res.ok) return null
  const users = await res.json()
  return users.find((u) => u._id === id) ?? null
}

const UserDetailsPage = async ({ params }) => {
  const { slug } = await params
  const user = await getUser(slug)

  if (!user?._id) notFound()

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-4 p-6">
      <Button render={<Link href="/user" />} variant="ghost" className="w-fit">
        <ArrowLeft />
        Back to users
      </Button>

      <Card>
        <CardHeader className="items-center text-center">
          <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-semibold text-primary ring-1 ring-primary/20">
            {getInitials(user.name) || "?"}
          </div>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-xl">{user.name}</CardTitle>
            <CardDescription className="flex items-center justify-center gap-1.5">
              <Mail className="size-3.5 shrink-0" />
              {user.email}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm">
              <User className="size-4 shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">Name</span>
              <Separator className="mx-2 w-auto flex-1" />
              <span className="font-medium">{user.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="size-4 shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">Email</span>
              <Separator className="mx-2 w-auto flex-1" />
              <span className="font-medium">{user.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="size-4 shrink-0 text-center text-xs text-muted-foreground">
                #
              </span>
              <span className="text-muted-foreground">ID</span>
              <Separator className="mx-2 w-auto flex-1" />
              <span className="font-mono text-xs">{user._id}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserDetailsPage
