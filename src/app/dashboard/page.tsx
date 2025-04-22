import { Navbar } from "@/components/navbar"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-4">Welcome to your dashboard!</p>
      </main>
    </div>
  )
}