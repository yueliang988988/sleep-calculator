import React from 'react'

const SleepStagesGrid: React.FC = () => {
  return (
    <div className='grid grid-cols-layout grid-rows-layout max-h-96 self-center'>

        <div
          className='bg-slate-200 rounded-tl-md border-black border-b-2 border-r p-1 py-2'
        >
          Stage
        </div>
        <div
          className='bg-slate-200 border-black border-b-2 border-x-2 p-1 py-2'
        >
          Type
        </div>
        <div
          className='bg-slate-200 border-black border-b-2 border-x p-1 py-2'
        >
          Length
        </div>
        <div
          className='bg-slate-200 rounded-tr-md border-black border-b-2 border-l-2 p-1 py-2'
        >
          Characteristics
        </div>


        <div
          className='bg-slate-100 border-y border-r-0 border-black p-2'
        >
          1, N1
        </div>
        <div
          className='bg-slate-100 border-l-2 border-y border-r border-black p-2'
        >
          NREM
        </div>
        <div
          className='bg-slate-100 border border-black p-2'
        >
          1-5 min
        </div>
        <div
          className='bg-slate-100 border-l border-y border-black p-2'
        >
          Light; “dozing off”, easily disturbed
        </div>
        <div
          className='bg-slate-100 border-y border-r-0 border-black p-2'
        >
          2, N2
        </div>
        <div
          className='bg-slate-100 border-l-2 border-y border-r border-black p-2'
        >
          NREM
        </div>
        <div
          className='bg-slate-100 border border-black p-2'
        >
          10-60 min
        </div>
        <div
          className='bg-slate-100 border-l border-y border-black p-2'
        >
          Lower temperature; brain and motor activity slows; 50% of total sleep time
        </div>
        <div
          className='bg-slate-100 border-y border-r-0 border-black p-2'
        >
          3, N3, Slow Wave Sleep
        </div>
        <div
          className='bg-slate-100 border-l-2 border-y border-r border-black p-2'
        >
          NREM
        </div>
        <div
          className='bg-slate-100 border border-black p-2'
        >
          20-40 min
        </div>
        <div
          className='bg-slate-100 border-l border-y border-black p-2'
        >
          Deep; delta “slow” brain waves; further decreased muscle activity, 
          breathing, heart rate; usually occurs during beginning of sleep
        </div>
        <div
          className='bg-slate-100 rounded-bl-md border-t border-black p-2'
        >
          4, REM
        </div>
        <div
          className='bg-slate-100 border-x-2 border-t border-black p-2'
        >
          REM
        </div>
        <div
          className='bg-slate-100 border-t border-black p-2'
        >
          10-60 min
        </div>
        <div
          className='bg-slate-100 rounded-br-md border-l-2 border-t border-black p-2'
        >
          Similar “awake” brain activity; 
          motor function halted save for eye movement and breathing
        </div>
    </div>
  )
}

export default SleepStagesGrid