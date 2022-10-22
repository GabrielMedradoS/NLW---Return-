import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

app.use(cors());

// allow to access origin methods
app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "include");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Requested-With, Accept, X-Custom-Header"
  );
  next();
});

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server is running!");
});
