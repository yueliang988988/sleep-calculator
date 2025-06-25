/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import RealWakeWindowCalculator from '../components/RealWakeWindowCalculator'

export default function OvertiredBabySigns() {
  return (
    <>
      <Head>
        <title>Overtired Baby Signs</title>
        <meta name="description" content="Practical guide + free wake-window calculator embedded. Updated 2025." />
      </Head>
      
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Overtired Baby Signs</h1>
        
        <RealWakeWindowCalculator />
        
        <div className="prose max-w-none mt-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Recognizing the signs of an overtired baby is essential for maintaining healthy sleep patterns. 
            When babies stay awake too long, their bodies produce stress hormones that make it harder to fall 
            asleep and stay asleep.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            Common signs include excessive crying or fussiness, difficulty settling down, hyperactivity or 
            appearing "wired," rubbing eyes or face, yawning frequently, and becoming clingy or demanding. 
            Some babies may also arch their backs, have trouble feeding, or wake frequently during sleep.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            Prevention is key! Watch for early tired cues like decreased activity, staring into space, 
            or subtle fussiness. Acting on these early signs and following age-appropriate wake windows 
            can help prevent overtiredness and promote better sleep for the whole family.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-6">FAQ</h2>
        
        <details className="mb-4 p-4 border rounded">
          <summary className="font-medium cursor-pointer">How accurate is this calculator?</summary>
          <p className="mt-2 text-gray-700">
            Our algorithm is based on pediatric sleep-consultant guidelines and real-world parent data. 
            Still, every baby is unique—use it as a starting point.
          </p>
        </details>
        
        <details className="mb-4 p-4 border rounded">
          <summary className="font-medium cursor-pointer">Can I use this schedule for premature babies?</summary>
          <p className="mt-2 text-gray-700">
            Premature babies often need shorter wake windows. Adjust by their corrected age and consult your pediatrician.
          </p>
        </details>
        
        <div className="mt-8 p-4 bg-gray-50 rounded">
          <p>
            <strong>Back to 👉 <a href="/" className="text-blue-600 underline">Wake Window Calculator</a></strong>
          </p>
        </div>
      </div>
    </>
  )
} 