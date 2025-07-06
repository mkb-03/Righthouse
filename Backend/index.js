const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const pino = require("pino")();
const expressPino = require("express-pino-logger");
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// const authRoutes = require("./routes/auth");

const app = express();


// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "hfhfhffhf",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// CORS
const corsOptions = {
  origin: ["http://localhost:5173"],
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

// Logger
const logger = expressPino({ logger: pino });
app.use(logger);

// const authRoutes = require("./routes/auth");

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Roofing", {
    useNewUrlParser: true,
  })
  .catch((err) => {
    pino.error("MongoDB connection error:", err);
  });

// JWT Strategy (disabled unless needed, since User model is not defined)
// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.JWT_SECRET || "herecomesthesecretkey",
// };
// passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
//   // Requires: const User = require("./models/User")
// }));

// Serve static React files (optional frontend support)
app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

// 🚫 TEMPORARILY REMOVED to avoid path-to-regexp crash
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
// });

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  pino.info(`Server is running on port ${port}`);
});
