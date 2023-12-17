import { onRequest as __hello_js_onRequest } from "D:\\Users\\Lenovo\\Desktop\\cloudFlare\\pages-demo\\functions\\hello.js"
import { onRequest as __kv_js_onRequest } from "D:\\Users\\Lenovo\\Desktop\\cloudFlare\\pages-demo\\functions\\kv.js"

export const routes = [
    {
      routePath: "/hello",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__hello_js_onRequest],
    },
  {
      routePath: "/kv",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__kv_js_onRequest],
    },
  ]