/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { getWakeWindow } from "../lib/calc"

export default function Article() {
  const rows = Array.from({ length: 25 }, (_, m) => {
    const [min, max] = getWakeWindow(m)
    return { m, range: `${min}-${max} min` }
  })

  return (
    <main className="prose mx-auto p-6">
      <h1>Wake Windows by Age: The Complete Chart (0-24 Months)</h1>

      <p>
        Wake windows refer to the optimal span your baby can stay awake before the next nap or bedtime. Staying within these ranges prevents overtiredness and makes falling asleep easier.
      </p>

      <h2>Age-Based Wake-Window Chart</h2>
      <table>
        <thead><tr><th>Age (months)</th><th>Recommended Window</th></tr></thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.m}><td>{r.m}</td><td>{r.range}</td></tr>
          ))}
        </tbody>
      </table>

      <h2>FAQ</h2>
      <h3>What if my baby skips a nap?</h3>
      <p>Extend the next wake window by just 10–15 minutes. Overshooting often backfires and leads to crankiness.</p>

      <h3>Signs of being overtired?</h3>
      <p>Frequent yawning, back-arching, rubbing eyes or ears, etc.</p>

      <hr />
      <p className="text-center">
        Ready to auto-plan today's naps?{" "}
        <Link href="/" className="underline">Try the free Wake-Window Calculator →</Link>
      </p>
    </main>
  )
} 