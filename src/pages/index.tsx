import type { NextPage } from "next";
import AsleepBy from "../components/AsleepBy";
import WakeUpAt from "../components/WakeUpAt";
import { trpc } from "../utils/trpc";
import TimePicker from "../components/TimePicker";
// import useCalculateCycle, {SleepCycleQuery, SleepCycleResult} from "../utils/useCalculateCycle";


const Home: NextPage = () => {
  // trpc example
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  // const { timeArray, message } = useCalculateCycle({
  //   time: "10:30 AM",
  //   method: "asleepBy"
  // });
  
  return (
    <>
      <h2 className="text-2xl text-gray-800 p-4">I will be asleep by... </h2>

      {/* <AsleepBy /> */}
      <TimePicker method="asleepBy" />

      <h2 className="text-2xl text-gray-800 p-4">I need to wake up at...</h2>

      {/* <WakeUpAt /> */}

      <TimePicker method="wakeUpAt" />

      {/* ! trpc example */}
      {/* <div className="pt-6 px-4 text-2xl text-blue-500 w-full">
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div> */}
    </>
  );
};


export default Home;
