const express = require("express");
const connect = require("./database/db.js");
const router = require("./routes/routes.js");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(router);

app.listen(8000, () => {
    connect();
    console.log(`Server is running on the port 8000`);
})

