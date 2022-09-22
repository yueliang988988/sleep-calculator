import { NextPage } from 'next';
import React from 'react'
import GeneralInfoDisplay from '../components/GeneralInfoDisplay';
import RecentNewsDisplay from '../components/RecentNewsDisplay';
import SleepStagesGrid from '../components/SleepStagesGrid';
// import { trpc } from "../utils/trpc";

/* 
didUMean: ""
relatedSearch: []
totalCount: 886
value: Array(10)
  0:
    body: "Register for a free online session to discover easy bedtime routines that aim to improve your sleep cycle\nRepresentative Image\nWere you aware that one of the major factors that determines your immunity level is the quality of sleep? Do you often find it difficult to have a sound sleep after a long working day? A bedtime yoga workshop by wellness coach Parul Khurana might help you restore your sleep cycle and create a healthier version of yourself.\nParul Khurana\nNowadays, people complain that falling asleep takes longer than it should. The reasons for this can vary from distraction by technology to over-thinking and stress. Our lifestyles have hampered our quality of sleep, shares Khurana. She explains that taking sleeping pills doesnt serve the right purpose either, as it harms the natural sleep cycle. Her one-hour session will give participants a glimpse into a yogic technique known as yoga nidra, which is a guided form of meditation that helps one to fall into a deep state of rest.\nKhurana explains that she realised there were several people in the corporate space who experienced a lack of sleep, and so she started conducting these workshops during the pandemic. The lockdown resulted in increased workload for many, and it became all the more difficult for us to manage our health. At the workshop, I will be explaining certain breathing techniques for relaxation before moving on to introducing yoga nidra. Incorporating bedtime yoga into day-to-day life also helps to rejuvenate the entire nervous system, she adds, reiterating that, Thirty minutes of yoga can help one remain in a healthy state of mind for the rest of the day. A child goes to sleep without any effort, which is the natural mechanism of the body. We need to realise that if this flow is interrupted, we are definitely doing something wrong with our lifestyle, and practising yoga is the natural way of bringing the balance back, she signs off.\nOn: August 9; 8.30 pm\nLog on to: insider.in"
    datePublished: "2022-08-09T09:14:00"
    description: "Register for a free online session to discover easy bedtime routines that aim to improve your sleep cycle"
    id: "7267890059758800039"
    image: {url: 'https://images.mid-day.com/images/images/2022/aug/Yoga-bed_d.jpg', height: 0, width: 0, thumbnail: '', thumbnailHeight: 0, …}
    isSafe: true
    keywords: ""
    language: "en"
    provider: {name: 'mid-day', favIcon: '', favIconBase64Encoding: ''}
    snippet: "... improve your <b><b>sleep cycle</b></b>. Register for ... improve your <b><b>sleep cycle</b></b> Representative Image ... quality of <b>sleep</b>? Do you ... restore your <b><b>sleep cycle</b></b> and create a ..."
    title: "In sleep mode: Check out this session to improve your sleep cycle"
    url: "https://www.mid-day.com/mumbai-guide/things-to-do/article/in-sleep-mode-23240101"



*/

// data.value[0] === article object
// data.value[0].title === article title
// 
// data.value[0].url === article link
// data.value[0].description === article description
// 

// pattern - checking for data-availability first
//  we wont care that data is stale for now..
// if (data) return <div>....</div>
// if (error) return 'an error has occurred: ' + error.message
// return <div>Loading...</div>
const info: NextPage = () => {
  
    // trpc example
  // const {data, isLoading, error} = trpc.useQuery(["example.hello"], {
  //   staleTime: Infinity, 
  //   // keepPreviousData: true,
  //   // isDataEqual: () => true
  // });
  // console.table(hello.data);
  // console.table(data);
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
        <p className=' my-6'>
          Over the course of a night's rest, your sleep is made up of one or more cycles of 4 distinct stages of sleep, 
          each with their own defining characteristics. Each stage has a tell-tale combination of brain wave signatures, 
          motor activity levels, and breathing and heart rates. Your body can go through each stage at varying durations 
          to make up an identifiable cycle that typically ranges from 80-120 minutes averaging at 90 minutes. 
          This structural organization of normal sleep is commonly referred to as “sleep architecture”.
        </p>
      </div>

      <div>
        {/* 
          SUN

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
          </svg>
        
          MOON

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
          </svg>
        
          ARROW REPEAT
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>

          STEP CHART

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-steps" viewBox="0 0 16 16">
            <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z"/>
          </svg>
        
        
        */}
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