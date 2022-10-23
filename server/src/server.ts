import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

app.use(cors({ origin: "*" }));
// allow to access origin methods
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server is running!");
});
