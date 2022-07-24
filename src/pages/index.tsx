import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import useCalculateCycle, {SleepCycleQuery, SleepCycleResult} from "../utils/useCalculateCycle";


const Home: NextPage = () => {
  // trpc example
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const { sleepTimeArray, message } = useCalculateCycle({
    time: "10:30 AM",
    method: "to"
  })
  
  return (
    <>
      <h2 className="text-2xl text-gray-800 p-4">One cycle from 10:30 AM is: </h2>
      <div
        className="p-4"
      >
        {/* time picker component */}
        <p>
          {sleepTimeArray[0]}
        </p>
        <p>
          {message}
        </p>

      </div>
      <h2 className="text-2xl text-gray-800 p-4">I need to wake up at: </h2>
      <div
        // className=""
      >
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
