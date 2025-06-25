import { useState } from "react"

export default function RealWakeWindowCalculator() {
  const [age, setAge] = useState<number | "">("")
  const [window, setWindow] = useState<string>("")

  // 简单年龄->醒窗对照
  const table: Record<number, string> = {
    0: "45-60 min",
    1: "60-90 min",
    2: "75-105 min",
    3: "1 h 15 m - 1 h 45 m",
    4: "1 h 30 m - 2 h",
    5: "2 h - 2 h 15 m",
    6: "2 h 15 m - 2 h 30 m",
    7: "2 h 30 m - 3 h",
    8: "2 h 45 m - 3 h",
    9: "3 h",
    10: "3 h-3 h 15 m",
    11: "3 h 15 m-3 h 30 m",
    12: "3 h 30 m-4 h",
  }

  function handleCalc() {
    if (age === "") return
    const a = Math.min(Math.floor(+age), 12)
    setWindow(table[a] || "≈4 h +")
  }

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Wake-Window Calculator</h2>

      <label className="block mb-2">
        Baby age (months):
        <input
          type="number"
          min="0"
          max="24"
          value={age}
          onChange={e => setAge(e.target.value === "" ? "" : +e.target.value)}
          className="mt-1 w-full border p-2 rounded"
        />
      </label>

      <button
        onClick={handleCalc}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Calculate
      </button>

      {window && (
        <p className="mt-4 text-lg">
          Recommended wake window: <strong>{window}</strong>
        </p>
      )}
    </div>
  )
} 