function is_hello(h: "hello"): true {
   switch (h) {
      case "hello":
         return true;
   }
}

function is_hello_2(h: "hello"): true {
   switch (h) {
      case "hello":
         return true;
      default:
         h satisfies never;
   }
}
