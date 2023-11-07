import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);

// socket.io
const io = new Server(httpServer, {
  path: "/api/socket.io",
  cookie: true,
  pingTimeout: 60000,
  cors: { credentials: true, origin: "http://localhost:5173" },
});
io.on("connection", (socket) => {
  socket.on("new message", (userEmail) => {
    socket.broadcast.emit("message", userEmail);
  })
});
  

//connections and listeneres
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    httpServer.listen(PORT, () =>
      console.log("Server Open & Connected To Database 🤟")
    );
  })
  .catch((err) => console.log(err));


