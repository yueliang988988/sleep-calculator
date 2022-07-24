import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // trpc example
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <h2 className="text-2xl text-gray-800 p-4">I will be asleep by: </h2>
      <div
        // className=""
      >
        {/* time picker component */}
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
