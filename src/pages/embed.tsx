import dynamic from "next/dynamic"
import Head from "next/head"

const RealWakeWindowCalculator = dynamic(
  () => import("../components/RealWakeWindowCalculator"),
  { ssr: false }
)

export default function Embed() {
  return (
    <>
      <Head>
        <style>{`
          header, nav { display: none !important; }
          body { margin: 0; }
        `}</style>
      </Head>
      <main style={{ padding: 16, background: "#fff", margin: 0 }}>
        <div className="max-w-xl mx-auto mb-6">
          <label className="block text-sm font-medium mb-1">
            Copy &amp; paste this code into your blog&nbsp;👇
          </label>
          <div className="relative">
            <input
              type="text"
              readOnly
              value='<iframe src="https://wakewindowcalc.com/embed" width="100%" height="600" style="border:0" loading="lazy"></iframe>'
              className="w-full border rounded-lg p-2 pr-10 text-sm bg-gray-100"
              id="iframeCode"
            />
            <button
              onClick={() => {
                const input = document.getElementById('iframeCode') as HTMLInputElement
                if (input) navigator.clipboard.writeText(input.value)
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
              aria-label="Copy"
            >
              📋
            </button>
          </div>
        </div>
        
        <RealWakeWindowCalculator />
      </main>
    </>
  )
} 