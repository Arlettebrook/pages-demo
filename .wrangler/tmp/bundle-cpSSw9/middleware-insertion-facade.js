				import worker, * as OTHER_EXPORTS from "D:\\Users\\Lenovo\\Desktop\\cloudFlare\\pages-demo\\.wrangler\\tmp\\pages-d4z9f4\\functionsWorker-0.6013859782478002.mjs";
				import * as __MIDDLEWARE_0__ from "D:\\Users\\Lenovo\\Desktop\\cloudFlare\\pages-demo\\node_modules\\.pnpm\\wrangler@3.21.0\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "D:\\Users\\Lenovo\\Desktop\\cloudFlare\\pages-demo\\.wrangler\\tmp\\pages-d4z9f4\\functionsWorker-0.6013859782478002.mjs";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;