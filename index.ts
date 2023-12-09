const server = Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === '/') {
      return new Response('This is the Home Page');
    } else if (url.pathname === '/about') {
      return new Response('About me!!!');
    }
    return new Response('404 error');
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});

console.log(`Lisening on port ${server.port}`);
// bun index.ts
// bun run index.ts
// bun --watch index.ts
// bun --hot index.ts
