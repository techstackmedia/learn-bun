const server = Bun.serve({
    fetch(req: Request): Response | Promise<Response> {
      return new Response("Hello People");
    },
  
    // Optional port number - the default value is 3000
    port: process.env.PORT || 3000,
})

console.log(`Lisening on port ${server.port}`)
// bun index.ts 
// bun run index.ts
// bun --watch index.ts
