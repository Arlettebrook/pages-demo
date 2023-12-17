export async function onRequest(context) {
  console.log(context);
  const { env } = context;
  try {
    await env.kv_demo.put("dog", "狗");
    const value = await env.kv_demo.get("dog");
    const value2 = await env.kv_demo.get('cat')
    const value3 = await env.kv_demo.list();
    let num=''
    for(let item of value3.keys){
      console.log(item)
      num+=item.name+':'+await env.kv_demo.get(item.name)
    }
    console.log(value3)
    if (value === null) {
      return new Response("Value not found", { status: 404 });
    }
    return new Response(value+'@   '+value2+'   @'+num);
  } catch (err) {
    // In a production application, you could instead choose to retry your KV
    // read or fall back to a default code path.
    console.error(`KV returned error: ${err}`);
    return new Response(err, { status: 500 });
  }
}
