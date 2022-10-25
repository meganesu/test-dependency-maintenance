const concurrently = require("concurrently");
const path = require("path");

concurrently(
  [
    {
      command: "npm install",
      name: "locations",
      cwd: path.resolve(__dirname, "../final/subgraph-locations"),
      prefixColor: "blue",
    },
    {
      command: "npm install",
      name: "activities",
      cwd: path.resolve(__dirname, "../final/subgraph-activities"),
      prefixColor: "magenta",
    },
    {
      command: "npm install",
      name: "reviews",
      cwd: path.resolve(__dirname, "../final/subgraph-reviews"),
      prefixColor: "green",
    },
    {
      command: "npm install",
      name: "gateway",
      cwd: path.resolve(__dirname, "../final/gateway"),
      prefixColor: "yellow",
    },
    {
      command: "npm install",
      name: "client",
      cwd: path.resolve(__dirname, "../final/client"),
      prefixColor: "cyan",
    },
  ],
  {
    prefix: "name",
    restartTries: 3,
  }
);
