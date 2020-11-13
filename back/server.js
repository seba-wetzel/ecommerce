import express from "express";
import api from "./src/routes/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("../front/dist/"));
app.use(express.static("../front/src"));

app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(500).send(err);
});

app.use("/api", api);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../front/dist/index.html"));
});

app.listen(8000, () => {
  console.log(`Server listening at port 8000`);
});
