import type { NextPage } from "next";
import AsleepBy from "../components/AsleepBy";
import WakeUpAt from "../components/WakeUpAt";
import { trpc } from "../utils/trpc";
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
      <h2 className="text-2xl text-gray-800 p-4">I will be asleep by 10:30 AM... </h2>

      <AsleepBy />

      <h2 className="text-2xl text-gray-800 p-4">I need to wake up at 8:00 AM...</h2>

      <WakeUpAt />
      {/* ! trpc example */}
      {/* <div className="pt-6 px-4 text-2xl text-blue-500 w-full">
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div> */}
    </>
  );
};


export default Home;
