import Head from 'next/head'
import WakeWindowCalculator from '../components/WakeWindowCalculator'

export default function HowToUseWakeWindowCalculator() {
  return (
    <>
      <Head>
        <title>How to Use Wake Window Calculator</title>
        <meta name="description" content="Practical guide + free wake-window calculator embedded. Updated 2025." />
      </Head>
      
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">How to Use Wake Window Calculator</h1>
        
        <WakeWindowCalculator className="my-8" />
        
        <div className="prose max-w-none mt-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our wake window calculator helps you determine the optimal times for naps and bedtime based on 
            your baby's age and last wake time. Simply enter your baby's age in months and the time they 
            last woke up to get personalized recommendations.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            The calculator uses evidence-based wake window guidelines that account for your child's 
            developmental stage. It calculates the ideal next nap time and bedtime to prevent overtiredness 
            while ensuring adequate awake time for healthy sleep pressure to build.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            Remember that these are guidelines, not rigid rules. Every baby is different, and factors like 
            growth spurts, illness, or developmental leaps can affect sleep needs. Use the calculator as 
            a starting point and adjust based on your child's individual sleep cues and patterns.
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