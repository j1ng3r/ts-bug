function kill_all_humans(): never {
   throw new Error("Everyone died. :(");
}
function takes_string(s: string) {
   if (s === undefined) {
      kill_all_humans();
   }
   console.log("I have a string!", s);
}

const arr = ["hello"]; // string[]
const elem = arr[1]; // string
takes_string(elem);
