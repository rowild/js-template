import { defineConfig } from 'vite'
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'
// import dns from 'dns'


// dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  plugins: [
    // crossOriginIsolation()
    // {
    //   name: 'configure-response-headers',
    //   configureServer: server => {
    //     server.middlewares.use((_req, res, next) => {
    //       res.setHeader('Test-Header', 'A random value');
    //       next();
    //     });
    //   }
    // }
  ]
})