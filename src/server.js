const Hapi = require('@hapi/hapi');
const routes = require('./routes'); // Mengimpor routes yang sudah disiapkan

const startServer = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes); // Menghubungkan routes ke server

  await server.start();
  console.log('Server berjalan pada port: %s', server.info.uri);
};

// Memulai server
startServer();
