import { NextPage } from 'next';
import React from 'react'
import GeneralInfoDisplay from '../components/GeneralInfoDisplay';
import RecentNewsDisplay from '../components/RecentNewsDisplay';
import SleepStagesGrid from '../components/SleepStagesGrid';
import SvgMorphBox from '../components/SvgMorphBox';


// pattern - checking for data-availability first
//  we wont care that data is stale for now..
// if (data) return <div>....</div>
// if (error) return 'an error has occurred: ' + error.message
// return <div>Loading...</div>
const info: NextPage = () => {

  return (
    <>
    <div
      className='flex flex-col justify-start items-start gap-20 
                  min-h-[300px] w-full
                  p-4'
    >
      <div>
        <h2 className='text-2xl mb-1'>
          What are sleep cycles?
        </h2>
        <p className=' my-4'>
          Over the course of a night's rest, your sleep is made up of one or more cycles of 4 distinct stages of sleep, 
          each with their own defining characteristics. Each stage has a tell-tale combination of brain wave signatures, 
          motor activity levels, and breathing and heart rates. Your body can go through each stage at varying durations 
          to make up an identifiable cycle that typically ranges from 80-120 minutes averaging at 90 minutes. 
          This structural organization of normal sleep is commonly referred to as “sleep architecture”.
        </p>
      </div>

      <div
        className='flex flex-row self-center'
      >
        {/* svg icons from bootstrap icons! */}
        <SvgMorphBox />
      </div>


      <div>
        <h3 className='text-xl mb-1'>
          What are the stages?
        </h3>
        <p className=' mt-6 mb-[-1rem]'>
          The 4 stages are comprised of 1 rapid eye movement (REM) stage and 3 non rapid eye movement (NREM) stages. 
          They each have a depth, which indicates how difficult it is to wake someone during that stage.
        </p>
      </div>

      <SleepStagesGrid />

      <p className=''>
        Experts suggest the deeper stages of sleep are critical for overall body restoration, healthy cognitive function, 
        and memory consolidation. Failure to undergo these stages of sleep may explain why we have profound negative 
        consequences in physical and mental health as well as learning. 
      </p>

      <div>
        <h3 className='text-xl mb-1'>
          What's the calculator for?
        </h3>
        <p className='my-6'>
          The aim is to approximate a specific sleep time or wake up time to allow yourself to wake up at a light stage of sleep. 
          It seems helpful to try to avoid interrupting deeper sleep stages. 
          In doing so, you might find yourself able to wake up easier and feel less groggy.
        </p>
      </div>



      <div>
        <h3 className='text-xl mb-1'>
          Sources + further reading
        </h3>
        <div className='flex flex-col justify-start items-start gap-1'>
          <a
            href={"https://www.ncbi.nlm.nih.gov/books/NBK526132/"}
            target="_blank"
            className='underline'
            rel='noopener noreferrer'
          >
            Physiology, Sleep Stages
          </a>
          <a
            href={"https://www.ncbi.nlm.nih.gov/books/NBK19956/"}
            target="_blank"
            className='underline'
            rel='noopener noreferrer'
          >
            Sleep Disorders and Sleep Deprivation: An Unmet Public Health Problem
          </a>
          <a
            href={"https://www.sleepfoundation.org/stages-of-sleep"}
            target="_blank"
            className='underline'
            rel='noopener noreferrer'
          >
            Sleep Foundation
          </a>
          <a
            href={"https://www.psychologytoday.com/us/blog/between-you-and-me/201307/your-sleep-cycle-revealed"}
            target="_blank"
            className='underline'
            rel='noopener noreferrer'
          >
            Psychology Today
          </a>
        </div>
      </div>


    </div>
    </>
  )
}

export default info;