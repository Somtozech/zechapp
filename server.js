const app = require("./server/app");
const socketManager = require("./server/socketManager");
const server = require("http").createServer(app);
const io = (module.exports.io = require("socket.io")(server));

const port = process.env.PORT || 8080;

io.on("connection", socketManager);

server.listen(port, () => {
  console.log(`listening at *${port}`);
});
