"use client";

import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"

export function Navbar() {
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <div className="flex space-x-4">
          <a href="/dashboard" className="flex items-center">
            <span className="text-xl font-bold">Novel Poll</span>
          </a>
        </div>
        <div className="ml-auto flex items-center">
          <Button variant="outline" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>
    </nav>
  )
}