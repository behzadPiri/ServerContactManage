const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewars = jsonServer.defaults();

server.use(middlewars);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Json server is running on port ${PORT}`)
});
