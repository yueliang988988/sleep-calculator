// credit to framer motion examples
// https://codesandbox.io/s/framer-motion-notifications-5cvo9?file=/src/array-utils.ts:0-264
import type { Notifications } from "../components/TimePicker";
import type { ErrorMsg } from "../components/TimePicker";

export const remove = (arr: Notifications[], item: number) => {
  const newArr = [...arr];
  newArr.splice(newArr.findIndex(i => i.id === item), 1);
  return newArr;
};

let newIndex = 0;
export const add = (arr: Notifications[], obj: ErrorMsg) => {
  newIndex++;
  return [...arr, {
    id: newIndex,
    errorType: obj.errorType,
    message: obj.message
  }] as Notifications[];
};
