import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

// type TechnologyCardProps = {
//   name: string;
//   description: string;
//   documentation: string;
// };

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>

        <p className="text-2xl text-gray-800 p-4">I will be asleep by...</p>
        
        <div className="grid gap-3 px-4 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <p>
            what time do you want to go to sleep?
          </p>
          <p>
            what time do you have to be awake by?
          </p>
          <p>
            here
          </p>
          <p>
            there
          </p>
        </div>
        <div className="pt-6 px-4 text-2xl text-blue-500 w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
    </>
  );
};

// const TechnologyCard = ({
//   name,
//   description,
//   documentation,
// }: TechnologyCardProps) => {
//   return (
//     <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
//       <h2 className="text-lg text-gray-700">{name}</h2>
//       <p className="text-sm text-gray-600">{description}</p>
//       <a
//         className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
//         href={documentation}
//         target="_blank"
//         rel="noreferrer"
//       >
//         Documentation
//       </a>
//     </section>
//   );
// };

export default Home;
