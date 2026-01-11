// import https from "https";
// import { app } from "./app.js";
// import { connectMongo } from "./config/mongo.js";
// import { ENV } from "./config/env.js";

// const startServer = (port) => {

//   const server = https.createServer(app).listen(port, () => {
//     console.log(`Secure Server running on port ${port}`);
//     console.log(`https://localhost:${port}`);
//   });

//   server.on("error", (err) => {
//     if (err.code === "EADDRINUSE") {
//       console.log(`Port ${port} is in use, trying ${port + 1}...`);
//       startServer(port + 1);
//     } else {
//       console.error(err);
//     }
//   });
// };

// connectMongo()
//   .then(
//       () => startServer(Number(ENV.PORT) || 5000))
//   .catch((err) => console.error("Database connection failed:", err));


import http from "http";
import { app } from "./app.js";
import { connectMongo } from "./config/mongo.js";
import { ENV } from "./config/env.js";

const startServer = (port) => {
  const server = http.createServer(app).listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${port} is in use, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
};

connectMongo()
  .then(() => startServer(Number(ENV.PORT) || 5000))
  .catch((err) => console.error("Database connection failed:", err));
