const express = require("express");
const cors = require("cors");
const app = express();
require("./DB/Conn");
const Routes = require("./Routes");

app.use(express.json());
app.use(cors());

app.use("/api/", Routes);

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
