import type { NextPage } from "next";
import React, {useState} from 'react'
// import { trpc } from "../utils/trpc";
import TimePicker from "../components/TimePicker";
import { add, remove } from "../utils/notification-util";

export interface ErrorMsg {
  errorType: "no set time" | "enter new time",
  message: "Enter a valid time!" | "Enter a new time!"
}
export interface Notifications extends ErrorMsg {
  id: number,
}

const Home: NextPage = () => {
  // trpc example
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const [notifications, setNotifications] = useState<Notifications[]>([]);

  return (
    <>
      <h2 className="text-2xl text-gray-800 p-4">I will be asleep by... </h2>
      <TimePicker 
        method="asleepBy"
        notifications={notifications}
        setNotifications={setNotifications}
        add={add}
        remove={remove}
      />

      <h2 className="text-2xl text-gray-800 p-4">I need to wake up at...</h2>
      <TimePicker 
        method="wakeUpAt"
        notifications={notifications}
        setNotifications={setNotifications}
        add={add}
        remove={remove}
      />

      {/* ! trpc example */}
      {/* <div className="pt-6 px-4 text-2xl text-blue-500 w-full">
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div> */}
    </>
  );
};


export default Home;
