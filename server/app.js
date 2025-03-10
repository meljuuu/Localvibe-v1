const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middleware/error");

const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = new Server(server, { cors: { origin: "*" } }); // Enable WebSocket

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Load environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env" });
}

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Import models
const Pin = require("./models/Pin");

// Watch for changes in the 'pins' collection
const changeStream = Pin.watch();
changeStream.on("change", (change) => {
  console.log("Detected change in pins:", change);
  io.emit("pinsUpdated"); // Notify frontend when pins are updated
});

// WebSocket connection
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Import routes
const user = require("./routes/user");
const post = require("./routes/Post");
const pin = require("./routes/pin");
const report = require("./routes/report");

app.use("/api/v1", user);
app.use("/api/v1", post);
app.use("/api/v1", pin);
app.use("/api/v1", report);

// Error Handling
app.use(ErrorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
