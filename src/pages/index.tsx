'use client'
import { useState } from "react"
import Link from "next/link"
import { calcSchedule } from "../lib/calc"

export default function Home() {
  const [age, setAge] = useState(6)
  const [wakeTime, setWakeTime] = useState("")
  const [result, setResult] = useState<{ nextNap: string; idealBedtime: string } | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { nextNap, idealBedtime } = calcSchedule(age, wakeTime)
    setResult({
      nextNap: nextNap.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      idealBedtime: idealBedtime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Wake Window Calculator</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          Baby&apos;s Age (in months):
          <input
            type="number"
            min="0"
            max="24"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="border p-2 rounded"
            required
          />
        </label>

        <label className="flex flex-col">
          Last Wake Time:
          <input
            type="datetime-local"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </label>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Calculate Schedule
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <p>🛌 <strong>Next Nap Time:</strong> {result.nextNap}</p>
          <p>🌙 <strong>Ideal Bedtime:</strong> {result.idealBedtime}</p>
        </div>
      )}

      <p className="text-sm text-center mt-10">
        New to wake windows?{" "}
        <Link href="/wake-windows-by-age" className="underline">
          Read the full guide
        </Link>
      </p>
    </main>
  )
}
