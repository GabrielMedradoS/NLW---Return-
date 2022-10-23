import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

// allow to access origin methods
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Requested-With, Accept, X-Custom-Header"
  );
  app.use(cors({ credentials: true, origin: "*" }));
  next();
});

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server is running!");
});
