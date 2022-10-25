const concurrently = require("concurrently");
const path = require("path");

concurrently(
  [
    {
      command: "npm update",
      name: "locations",
      cwd: path.resolve(__dirname, "../subgraph-locations"),
      prefixColor: "blue",
    },
    {
      command: "npm update",
      name: "activities",
      cwd: path.resolve(__dirname, "../subgraph-activities"),
      prefixColor: "magenta",
    },
    {
      command: "npm update",
      name: "reviews",
      cwd: path.resolve(__dirname, "../subgraph-reviews"),
      prefixColor: "green",
    },
    {
      command: "npm update",
      name: "gateway",
      cwd: path.resolve(__dirname, "../gateway"),
      prefixColor: "yellow",
    },
    {
      command: "npm update",
      name: "client",
      cwd: path.resolve(__dirname, "../client"),
      prefixColor: "cyan",
    },
    {
      command: "npm update",
      name: "locations (final)",
      cwd: path.resolve(__dirname, "../final/subgraph-locations"),
      prefixColor: "blue",
    },
    {
      command: "npm update",
      name: "activities (final)",
      cwd: path.resolve(__dirname, "../final/subgraph-activities"),
      prefixColor: "magenta",
    },
    {
      command: "npm update",
      name: "reviews (final)",
      cwd: path.resolve(__dirname, "../final/subgraph-reviews"),
      prefixColor: "green",
    },
    {
      command: "npm update",
      name: "gateway (final)",
      cwd: path.resolve(__dirname, "../final/gateway"),
      prefixColor: "yellow",
    },
    {
      command: "npm update",
      name: "client (final)",
      cwd: path.resolve(__dirname, "../final/client"),
      prefixColor: "cyan",
    },
  ],
  {
    prefix: "name",
    restartTries: 3,
  }
);
