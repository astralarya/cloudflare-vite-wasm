import { sayFoo } from "./foo";

export default {
  fetch() {
    return new Response(sayFoo());
  },
};
