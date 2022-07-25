import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import useCalculateCycle, {SleepCycleQuery, SleepCycleResult} from "../utils/useCalculateCycle";


const Home: NextPage = () => {
  // trpc example
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const { wakeTimeArray, sleepTimeArray, message } = useCalculateCycle({
    sleepTime: "10:30 AM",
    wakeTime: "08:00 AM",
    method: "to"
  })
  
  return (
    <>
      <h2 className="text-2xl text-gray-800 p-4">I will be asleep by 10:30 AM... </h2>
      <div
        className="p-4"
      >
        {/* time picker component */}
        <p>
          {wakeTimeArray[0]} | 
          {wakeTimeArray[1]} | 
          {wakeTimeArray[2]} |
          {wakeTimeArray[3]} |
          {wakeTimeArray[4]} |
          {wakeTimeArray[5]} |
          {wakeTimeArray[6]}
        </p>
        <p
          className=" text-xl pt-4 text-amber-800"
        >
          {message}
        </p>

      </div>
      <h2 className="text-2xl text-gray-800 p-4">I need to wake up at 8:00 AM...</h2>
      <div
        className="p-4"
        
      >
        <p>
          {sleepTimeArray[0]} | 
          {sleepTimeArray[1]} | 
          {sleepTimeArray[2]} |
          {sleepTimeArray[3]} |
          {sleepTimeArray[4]} |
          {sleepTimeArray[5]} |
          {sleepTimeArray[6]}
        </p>
        {/* time picker component */}
      </div>
      {/* ! trpc example */}
      {/* <div className="pt-6 px-4 text-2xl text-blue-500 w-full">
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div> */}
    </>
  );
};


export default Home;
