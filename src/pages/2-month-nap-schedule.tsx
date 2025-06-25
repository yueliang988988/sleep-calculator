/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import RealWakeWindowCalculator from '../components/RealWakeWindowCalculator'

export default function TwoMonthNapSchedule() {
  return (
    <>
      <Head>
        <title>2 Month Nap Schedule</title>
        <meta name="description" content="Practical guide + free wake-window calculator embedded. Updated 2025." />
      </Head>
      
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">2 Month Nap Schedule</h1>
        
        <RealWakeWindowCalculator />
        
        <div className="prose max-w-none mt-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            At 2 months old, your baby is beginning to develop more predictable sleep patterns. Most 2-month-olds 
            need 14-17 hours of sleep per 24-hour period, including 4-6 naps during the day.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            Wake windows for 2-month-olds are typically 60-90 minutes. This means your baby should be put down 
            for a nap within this timeframe to prevent overtiredness. A typical day might include 4-5 naps 
            ranging from 30 minutes to 2 hours each.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            Remember that every baby develops at their own pace. Some 2-month-olds may still have very irregular 
            schedules, while others might start showing more consistent patterns. Focus on following your baby's 
            sleep cues rather than forcing a rigid schedule.
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