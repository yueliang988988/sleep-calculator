import { NextPage } from 'next';
import React from 'react'
import { trpc } from "../utils/trpc";

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
// data.value[0].desciption === article link
// 

// pattern - checking for data-availability first
//  we wont care that data is stale for now..
// if (data) return <div>....</div>
// if (error) return 'an error has occurred: ' + error.message
// return <div>Loading...</div>
const info: NextPage = () => {

    // trpc example
  const {data, isLoading, error} = trpc.useQuery(["example.hello"], {
    staleTime: Infinity, 
    // keepPreviousData: true,
    // isDataEqual: () => true
  });
  // console.table(hello.data);
  console.table(data);
  return (
    <>
      
      <h2 className='text-2xl text-gray-800 p-4'>info</h2>

            {/* ! trpc example */}
      <div className="pt-6 px-4 text-2xl text-blue-500 w-full">
        {/* {hello.data ? <p>{hello.data}</p> : <p>Loading..</p>} */}
      </div>
    </>
  )
}

export default info;