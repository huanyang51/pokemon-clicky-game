const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan("dev"));
app.use(bodyparser.json());

app.get("/api/ping", (req, res) => res.send("pong"));

app.listen(PORT, () => {
  console.log(`[SERVER] app listening on port ${PORT}`);
});
