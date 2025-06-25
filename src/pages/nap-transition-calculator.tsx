/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import RealWakeWindowCalculator from '../components/RealWakeWindowCalculator'

export default function NapTransitionCalculator() {
  return (
    <>
      <Head>
        <title>Nap Transition Calculator</title>
        <meta name="description" content="Practical guide + free wake-window calculator embedded. Updated 2025." />
      </Head>
      
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Nap Transition Calculator</h1>
        
        <RealWakeWindowCalculator />
        
        <div className="prose max-w-none mt-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Nap transitions are major milestones in your child's sleep development. These typically occur 
            around 4 months (5→4 naps), 6-8 months (4→3 naps), 12-18 months (3→2 naps), and 2.5-4 years 
            (2→1 nap or dropping naps entirely).
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            Signs your child is ready for a nap transition include consistently refusing one nap, taking 
            longer to fall asleep, shorter naps, or early morning wake-ups. The transition period usually 
            lasts 2-4 weeks and requires gradually adjusting wake windows and nap times.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            During transitions, be flexible and patient. Some days your child might need the old schedule, 
            while others they'll handle the new one. Gradually extend wake windows by 15-30 minutes and 
            watch for overtiredness cues to ensure a smooth transition.
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
            <strong>Back to 👉 <Link href="/" className="text-blue-600 underline">Wake Window Calculator</Link></strong>
          </p>
        </div>
      </div>
    </>
  )
} 