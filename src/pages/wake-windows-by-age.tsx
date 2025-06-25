/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import RealWakeWindowCalculator from '../components/RealWakeWindowCalculator'

export default function WakeWindowsByAge() {
  return (
    <>
      <Head>
        <title>Wake Windows by Age</title>
        <meta name="description" content="Practical guide + free wake-window calculator embedded. Updated 2025." />
      </Head>
      
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Wake Windows by Age</h1>
        
        <RealWakeWindowCalculator />
        
        <div className="prose max-w-none mt-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Understanding wake windows by age is crucial for establishing healthy sleep patterns for your baby. 
            Wake windows are the periods when your baby should be awake between sleep periods, and they gradually 
            increase as your child grows.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            Newborns (0-2 months) typically have very short wake windows of 45-90 minutes, while toddlers 
            (2+ years) can stay awake for 5-6 hours between naps. Following age-appropriate wake windows 
            helps prevent overtiredness and promotes better sleep quality.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            Every baby is unique, so use these guidelines as a starting point and adjust based on your 
            child's individual needs and sleep cues. Signs of tiredness include rubbing eyes, yawning, 
            fussiness, and decreased activity.
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
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How accurate is this calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our algorithm is based on pediatric sleep-consultant guidelines and real-world parent data. Still, every baby is unique—use it as a starting point."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use this schedule for premature babies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Premature babies often need shorter wake windows. Adjust by their corrected age and consult your pediatrician."
                }
              }
            ]
          })
        }}
      />
    </>
  )
} 