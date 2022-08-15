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
                  min-h-[300px]
                  p-4
                  bg-blue-300'
    >
      <div>
        <h2 className='text-2xl mb-1'>
          What are sleep cycles?
        </h2>
        <p className=''>
          Over the course of a night's rest, your sleep is made up of one or more cycles of 4 distinct stages of sleep, 
          each with their own defining characteristics. Each stage has a tell-tale combination of brain wave signatures, 
          motor activity levels, and breathing and heart rates. Your body can go through each stage at varying durations 
          to make up an identifiable cycle that typically ranges from 80-120 minutes averaging at 90 minutes. 
          This structural organization of normal sleep is commonly referred to as “sleep architecture”.
        </p>
      </div>


      <div>
        <h3 className='text-xl mb-1'>
          What are the stages?
        </h3>
        <p className=''>
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
        <p className=''>
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