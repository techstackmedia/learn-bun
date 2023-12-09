const server = Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === '/') {
      return new Response('This is the Home Page');
    } else if (url.pathname === '/about') {
      return new Response('About me!!!');
    } else if (url.pathname === '/feed') {
      throw new Error('Could not fetch feed')
    } if (url.pathname === '/greet') {
      return new Response(Bun.file('./greet.txt'))
    }
    return new Response('404 error');
  },
  error(error) {
    return new Response(`${error} \n${error.stack}`);
  },

  port: process.env.PORT || 3000,
});

console.log(`Lisening on port ${server.port}`);

